import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Episodes from "@/app/episodes/page";
import '@testing-library/jest-dom';

import locationQuery from "@/app/episodes/page";

const mocks = [
  {
    request: {
      query: locationQuery,
    },
    result: {
      data: {
        locations: {
          results: [
            { name: "Earth", type: "Planet", dimension: "Dimension C-137" },
            { name: "Citadel of Ricks", type: "Space station", dimension: "unknown" },
          ],
        },
      },
    },
  },
];

describe("Episodes component", () => {
  it("renders loading state initially", async () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Episodes />
      </MockedProvider>
    );

    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders the location data correctly", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Episodes />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText(/Earth/)).toBeInTheDocument();
      expect(getByText(/Planet/)).toBeInTheDocument();
      expect(getByText(/Dimension C-137/)).toBeInTheDocument();
      expect(getByText(/Citadel of Ricks/)).toBeInTheDocument();
      expect(getByText(/Space station/)).toBeInTheDocument();
      expect(getByText(/unknown/)).toBeInTheDocument();
    });
  });

  it("handles error state", async () => {
    const errorMocks = [
      {
        request: {
          query: locationQuery,
        },
        error: new Error("An error occurred"),
      },
    ];

    const { getByText } = render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <Episodes />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText(/error/i)).toBeInTheDocument();
    });
  });
});

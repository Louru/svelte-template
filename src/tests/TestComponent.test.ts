import TestComponent from "@components/TestComponent.svelte";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";

describe("<TestComponent />", () => {
  test("Should include the text 'This is a test component.'", () => {
    render(TestComponent);
    expect(screen.getByText(/This is a test component./i)).toBeInTheDocument();
  });
});

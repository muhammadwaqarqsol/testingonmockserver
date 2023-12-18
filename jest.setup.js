import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";
import { server } from "@/mocks/server";
//establish api mocking before all the tests

beforeAll(() => server.listen());

//reset any request handlers that may add during the

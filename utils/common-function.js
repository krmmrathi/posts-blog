import { render } from "@testing-library/react";
import { PostsContext } from "../pages/_app";

export function isEmpty(obj) {
    return Object.keys(obj)?.length === 0;
}

export function isNotDefined(obj){
    return !obj || isEmpty(obj);

}

export function renderWithContext(child) {
    return render(
      <PostsContext.Provider value={{ users: [], darkMode: true,setUsers: jest.fn(), setDarkMode: jest.fn() }}>
        {child}
      </PostsContext.Provider>
    );
  }
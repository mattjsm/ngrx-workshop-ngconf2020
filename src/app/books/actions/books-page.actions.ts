import { createAction, props } from "@ngrx/store";
import { BookRequiredProps } from "src/app/shared/models";

export const createBook = createAction('[Books Page] Create Book', props<{ book: BookRequiredProps }>());
export const selectBook = createAction('[Books Page] Select Book', props<{id: string, book: BookRequiredProps}>());
export const editBook = createAction('[Books Page] Edit Book', props<{ id: string, book: BookRequiredProps }>());
export const deleteBook = createAction('[Books Page] Delete Book', props<{id: string}>());
export const clearSelection = createAction('[Books Page] Cancel Edit');
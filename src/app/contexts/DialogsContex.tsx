import { createContext } from "react";
import { boolean } from "yup";

export const ProfileDialogContex = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => null!]);

export const PreferencesDialogContex = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => null!]);

export const ResetPasswordDialogContex = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => null!]);

export const ContentDialogContex = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => null!]);

export const AddTagsDialogContex = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => null!]);

export const AddFoldersDialogContex = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => null!]);

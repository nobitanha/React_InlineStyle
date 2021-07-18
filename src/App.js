import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

export default function App() {
  const user = {
    name: "Test 1",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "1234@example.com",
    phone: "090-2222-3333",
    company: {
      name: "test company"
    },
    website: "https://google.com"
  };

  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton> テスト </PrimaryButton>
        <SecondaryButton> 検索 </SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

import UserForm from "./components/UserForm";

export default function App() {
  return (
    <div className="mx-auto max-w-[500px]">
      <UserForm
        user={{
          id: 1,
          birthday: new Date(),
          firstName: "Test",
          lastName: "User",
          email: "email@testuser.io",
          role: "editor",
        }}
      />
    </div>
  );
}

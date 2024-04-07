"user client";

import { logout } from "@/actions/user";

// import { logout } from "@/actions/user";

export default function LogoutButton() {
  return (
    <button onClick={() => logout()} className=" text-black">
      Logout
    </button>
  );
}

import SideNavigation from "@/app/_components/SideNavigation";

function AccountLayout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-20">
      <SideNavigation />
      {children}
    </div>
  );
}

export default AccountLayout;

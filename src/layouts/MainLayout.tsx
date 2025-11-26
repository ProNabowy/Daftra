import Header from "@/components/layout/Header";
import { ReactNode } from "react";

interface MainLayoutProps {
	children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="min-h-screen">
			<Header />
			<main>{children}</main>
		</div>
	);
}

export default MainLayout;


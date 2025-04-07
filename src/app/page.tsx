import Table from "@/components/fetching-data-table";
import LastRefresh from "@/components/last-refresh";


export default function Home() {
    return (
        <main className="flex flex-col items-center w-screen justify-center p-24">
            <Table />
            <LastRefresh />
        </main>
    );
}


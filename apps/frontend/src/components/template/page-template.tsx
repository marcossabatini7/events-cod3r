import Logo from './logo';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageTemplate(props: Props) {
    return <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
        <Logo />
        <main className={`flex-1 flex flex-col justify-center py-10 container ${props.className}`}>
            {props.children}
        </main>
    </div>
}

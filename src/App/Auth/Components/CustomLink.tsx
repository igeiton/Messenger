import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type CustomLinkProps = {
    to: string;
    children: string;
};

export default function CustomLink({ to, children }: CustomLinkProps) {
    const navigate = useNavigate();

    return (
        <div className="opacity-50 text-[10px]">
            or
            <Link
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate(`${to}`, { replace: true })}
            >
                <span> {children} </span>
            </Link>
            your account
        </div>
    );
}

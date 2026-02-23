import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type Menu = {
    id: string;
    nama: string;
    deskripsi: string;
    harga: number;
    size: string;
    label: string;
    kategori: string;
    createdAt: string;
    updatedAt: string;
}
export default function ListMenu() {
    const [menu, setMenu] = useState<Menu[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getMenu = async () => {
            const getMenuPost = await fetch("/api/list-menu", {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                    },
                });
                const data = await getMenuPost.json();
                setMenu(data);
        }
        getMenu();
    }, []);

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Menu</h1>
            {menu.map((menu) => {
                return (
                    <Card sx={{ minWidth: 275 }} key={menu.id}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                sx={{ color: "text.secondary", fontSize: 14 }}
                            >
                                {menu.nama}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {menu.deskripsi}
                            </Typography>
                            <Typography
                                sx={{ color: "text.secondary", mb: 1.5 }}
                            >
                                {menu.harga}
                            </Typography>
                            <Typography variant="body2">
                                {menu.size}
                            </Typography>
                            <Typography variant="body2">
                                {menu.label}
                            </Typography>
                            <Typography variant="body2">
                                {menu.kategori}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                onClick={() => {
                                    navigate("/menu/" + menu.id);
                                }}
                            >
                                Menu Detail
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
}
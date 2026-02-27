import { Alert, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useMenus } from "../hooks/useMenus";


export default function ListMenu() {
    // const [menu, setMenu] = useState<Menu[]>([]);
    const { menus, reload } = useMenus();
    const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
    const [deleteDialog, setDeleteDialog] = useState<boolean>(false);
    const [ deleteMenuId, setDeleteMenuId ] = useState<string>("");
    const navigate = useNavigate();

    const handleDeleteMenu = async (id: string) => {
        const response = await fetch("/api/delete-menu/" + id, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                id,
            }),
        });
        if (response.status != 200) {
            alert("Failed to delete menu");
            return;
        }

        setDeleteDialog(false);
        setDeleteSuccess(true);
    }

    useEffect(() => {
        reload();
    }, [reload]);

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Menu</h1>
            {menus.map((menu) => {
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
                            <Button
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDeleteMenuId(menu.id);
                                    setDeleteDialog(true);
                                }}
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
            <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
                <DialogTitle>Delete Post?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This action cannot be undone. Are you sure you want to
                        delete this post?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialog(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDeleteMenu(deleteMenuId)}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            
            <Snackbar
                open={deleteSuccess}
                autoHideDuration={3000}
                onClose={() => setDeleteSuccess(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    onClose={() => setDeleteSuccess(false)}
                    severity="success"
                    variant="filled"
                >
                    Post berhasil dihapus
                </Alert>
            </Snackbar>
        </div>
    );
}
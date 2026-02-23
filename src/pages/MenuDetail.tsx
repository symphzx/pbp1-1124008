import { Button, FormControl, InputLabel, MenuItem, Select, TextField, type SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

type Menu = {
    id: number;
    nama: string;
    deskripsi: string;
    harga: number;
    size: string;
    label: string;
    kategori: string;
    createdAt: string;
    updatedAt: string;
};

export default function CreateMenu() {
    const { id } = useParams();
    const [menu, setMenu] = useState<Menu>();
    const [nama, setNama] = useState<string>("");
    const [deskripsi, setDeskripsi] = useState<string>("");
    const [harga, setHarga] = useState<number>(0);
    const [size, setSize] = useState<string>("");
    const [label, setLabel] = useState<string>("");
    const [kategori, setKategori] = useState<string>("");

    const navigate = useNavigate();
    

    const handleChangeSize = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    }
    const handleChangeLabel = (event: SelectChangeEvent) => {
        setLabel(event.target.value as string);
    }
    const handleChangeKategori = (event: SelectChangeEvent) => {
        setKategori(event.target.value as string);
    }

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch(`/api/menu/${id}`);
            const data = await response.json();
            setMenu(data);
            setSize(data.size);
            setLabel(data.label);
            setKategori(data.kategori);
            if (!response.ok) {
                setMenu(undefined);
                return;
            }
        };
        fetchMenu();
    }, [id]);
    
    const setMenuFunc = async () => {
        const response = await fetch("/api/update-menu/" + id, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                nama,
                deskripsi,
                harga,
                size,
                label,
                kategori,
            }),
        });
        if (response.status != 200) {
            alert("Failed to update menu");
            return;
        }
        navigate("/list-menu");
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1 style={{ textAlign: "center" }}>Tambah Menu Baru</h1>
            <table
                style={{
                    width: "60%",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <tr>
                    <td style={{ width: "20%" }}>Nama Menu</td>
                    <td>
                        <TextField
                            id="nama-menu"
                            defaultValue={menu?.nama}
                            variant="outlined"
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </td>
                    <td style={{ width: "20%" }}>Size</td>
                    <td>
                        <FormControl fullWidth>
                            <InputLabel id="size-label">Size</InputLabel>
                            <Select
                                labelId="size-label"
                                id="size"
                                value={size}
                                label="Size"
                                onChange={handleChangeSize}
                            >
                                <MenuItem value={"small"}>Small</MenuItem>
                                <MenuItem value={"medium"}>Medium</MenuItem>
                                <MenuItem value={"large"}>Large</MenuItem>
                            </Select>
                        </FormControl>
                    </td>
                </tr>
                <tr>
                    <td style={{ width: "20%" }}>Deskripsi</td>
                    <td>
                        <TextField
                            id="deskripsi"
                            defaultValue={menu?.deskripsi}
                            variant="outlined"
                            onChange={(e) => setDeskripsi(e.target.value)}
                        />
                    </td>
                    <td style={{ width: "20%" }}>Label</td>
                    <td>
                        <FormControl fullWidth>
                            <InputLabel id="label-label">Label</InputLabel>
                            <Select
                                labelId="label-label"
                                id="label"
                                value={label}
                                label="Label"
                                onChange={handleChangeLabel}
                            >
                                <MenuItem value={"vegan"}>Vegan</MenuItem>
                                <MenuItem value={"gluten_free"}>Gluten-Free</MenuItem>
                                <MenuItem value={"halal"}>Halal</MenuItem>
                                <MenuItem value={"low_cal"}>Low Calorie</MenuItem>
                            </Select>
                        </FormControl>
                    </td>
                </tr>
                <tr>
                    <td style={{ width: "20%" }}>Harga</td>
                    <td>
                        <TextField
                            id="harga"
                            defaultValue={menu?.harga}
                            variant="outlined"
                            onChange={(e) => setHarga(parseInt(e.target.value))}
                        />
                    </td>
                    <td style={{ width: "20%" }}>Kategori</td>
                    <td>
                        <FormControl fullWidth>
                            <InputLabel id="kategori-label">Size</InputLabel>
                            <Select
                                labelId="kategori-label"
                                id="kategori"
                                value={kategori}
                                label="Kategori"
                                onChange={handleChangeKategori}
                            >
                                <MenuItem value={"makanan"}>makanan</MenuItem>
                                <MenuItem value={"minuman"}>minuman</MenuItem>
                            </Select>
                        </FormControl>
                    </td>
                </tr>
            </table>
            <Button variant="contained" onClick={setMenuFunc}>Simpan Menu</Button>
        </div>
    );
}

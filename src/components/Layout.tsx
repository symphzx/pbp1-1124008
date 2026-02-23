import { Toolbar, AppBar, Button, Box, Stack } from "@mui/material";
import type { PropsWithChildren } from "react";
import { Link } from "react-router";

export function Layout(props: PropsWithChildren) {

    return (
        <Stack>
            <AppBar position="static">
                <Toolbar>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexGrow={1}>
                        <Box/>
                        <Box>
                            <Button variant="contained" sx={{marginRight: 40}} component={Link} to="/create-menu">Tambah Menu</Button>
                            <Button variant="contained" component={Link} to="/list-menu">List Menu</Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {props.children}
        </Stack>
    );
}

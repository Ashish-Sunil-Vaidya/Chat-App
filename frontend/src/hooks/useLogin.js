import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const login = async (email, password) => {
        if (toast.isActive("toast")) toast.closeAll();
        setLoading(true);
        try {
            const response = await axios.post('/api/user/login', { email, password });
            setLoading(false);
            toast({
                id: "toast",
                title: "Login successful",
                status: "success",
            });
            return response.data;
        } catch (error) {
            console.log('=== error useLogin.js [21] ===', error);
            setLoading(false);
            toast({
                id: "toast",
                title: "Login failed",
                description: error.response.data.message,
                status: "error",
            });
        }
    }

    return { loading, login };
}

export default useLogin;
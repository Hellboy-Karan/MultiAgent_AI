export const login = async (req, res) => {
    try {
        const { firebaseUid, name, email, avatar } = req.body;
    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
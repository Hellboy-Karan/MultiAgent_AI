import { cert, initializeApp } from "firebase-admin";
import serviceAccount from "../serviceAccountKey-firebase-admin.json" with { type: "json" };

export const app = initializeApp({
    credential: cert(serviceAccount)
});

import { getLogger } from "@utils/index";
import App from "./App";

const LOGGER = getLogger();
const PORT   = process.env.PORT || 4000;

App.listen(PORT, () => {
    LOGGER.info(`Server running on port ${PORT}`);
});
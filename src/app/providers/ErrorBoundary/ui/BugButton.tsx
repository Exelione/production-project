import Button from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwErr = () => {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error('Error');
        }
    }, [error])

    return (

        <Button
            onClick={throwErr}
        >
            {t('Throw error')}
        </Button>

    );

}

export default BugButton;
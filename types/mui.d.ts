import '@mui/material/styles';
import '@mui/material/Typography';

// Add custom Typography Texts Here

declare module '@mui/material/styles' {
    interface TypographyVariants {
        quoteText: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        quoteText?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        quoteText: true;
    }
}
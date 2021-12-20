import { Alert } from 'react-bootstrap'

export default function PreviewAlert() {
    return (
        <Alert variant="secondary">
            This is Preview Mode -{` `}
            {/* This will lead me to API route removing preview cookies */}
            <Alert.Link href="/api/exit-preview">Exit Mode</Alert.Link>
        </Alert>
    )
}
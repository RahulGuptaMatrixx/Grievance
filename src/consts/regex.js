const REGEX = Object.freeze({
    ALPHA: /^[a-zA-Z]+$/,                       // Only alphabets (no spaces)
    ALPHA_SPACE: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, // Alphabets with spaces (No leading/trailing spaces)
    ALPHA_NUM: /^[a-zA-Z0-9]+$/,                // Alphanumeric (no spaces)
    ALPHA_NUM_SPACE: /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*$/, // Alphanumeric with spaces
    ALPHA_NUM_SPECIAL: /^[a-zA-Z0-9#@$&]+$/,     // Alphanumeric with specific special chars
    NUM: /^\d+$/,                                // Only Numbers
    DECIMAL: /^\d+(\.\d{1,8})?$/                 // Floating Point Number
})

export default REGEX
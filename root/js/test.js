function validateCC(int) {
    int sum = 0;
        for (int i = 0; i < str.length(); i++) {
                    int digit = Integer.parseInt("" + reverse.charAt(i));
        if (i % 2 == 1) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 == 0;
            }
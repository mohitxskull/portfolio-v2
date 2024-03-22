import { generatePassword } from '@/lib/tools/password-generator/pass-gen-func';

const main = async () => {
  const passwords = generatePassword({
    length: 12,
    uppercase: false,
    lowercase: true,
    numbers: true,
    symbols: false,
    ambiguous: true,
    passwordCount: 5,
  });

  console.log(passwords);
};

main().then(() => {
  process.exit(0);
});

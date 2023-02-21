/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/app/logo.jpg';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={logo} sx={{ display: 'flex', width: "150px", height: "100px" }} alt="startup landing logo" />
    </Link>
  );
}

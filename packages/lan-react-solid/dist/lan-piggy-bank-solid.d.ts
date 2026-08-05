import React from 'react';

export interface LanPiggyBankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiggyBankSolid(props: LanPiggyBankSolidProps): React.ReactElement;
export default LanPiggyBankSolid;

import React from 'react';

export interface LanShekelSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShekelSign(props: LanShekelSignProps): React.ReactElement;
export default LanShekelSign;

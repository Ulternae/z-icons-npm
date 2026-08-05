import React from 'react';

export interface LanRupiahSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRupiahSign(props: LanRupiahSignProps): React.ReactElement;
export default LanRupiahSign;

import React from 'react';

export interface LanPoundSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoundSign(props: LanPoundSignProps): React.ReactElement;
export default LanPoundSign;

import React from 'react';

export interface LanCediSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCediSign(props: LanCediSignProps): React.ReactElement;
export default LanCediSign;

import React from 'react';

export interface LanRupeeSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRupeeSign(props: LanRupeeSignProps): React.ReactElement;
export default LanRupeeSign;

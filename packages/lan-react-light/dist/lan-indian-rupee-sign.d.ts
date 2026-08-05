import React from 'react';

export interface LanIndianRupeeSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndianRupeeSign(props: LanIndianRupeeSignProps): React.ReactElement;
export default LanIndianRupeeSign;

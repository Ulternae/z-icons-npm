import React from 'react';

export interface LanDongSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDongSign(props: LanDongSignProps): React.ReactElement;
export default LanDongSign;

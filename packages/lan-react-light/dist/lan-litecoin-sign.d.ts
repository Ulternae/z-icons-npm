import React from 'react';

export interface LanLitecoinSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLitecoinSign(props: LanLitecoinSignProps): React.ReactElement;
export default LanLitecoinSign;

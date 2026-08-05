import React from 'react';

export interface LanPesoSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPesoSign(props: LanPesoSignProps): React.ReactElement;
export default LanPesoSign;

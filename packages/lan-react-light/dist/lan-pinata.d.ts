import React from 'react';

export interface LanPinataProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPinata(props: LanPinataProps): React.ReactElement;
export default LanPinata;

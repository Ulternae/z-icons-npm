import React from 'react';

export interface LanPiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPi(props: LanPiProps): React.ReactElement;
export default LanPi;

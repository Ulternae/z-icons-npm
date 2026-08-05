import React from 'react';

export interface LanPinballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPinballSolid(props: LanPinballSolidProps): React.ReactElement;
export default LanPinballSolid;

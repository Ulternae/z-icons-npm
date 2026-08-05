import React from 'react';

export interface LanPlusSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusSquareSolid(props: LanPlusSquareSolidProps): React.ReactElement;
export default LanPlusSquareSolid;

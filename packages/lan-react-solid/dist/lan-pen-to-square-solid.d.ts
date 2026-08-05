import React from 'react';

export interface LanPenToSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenToSquareSolid(props: LanPenToSquareSolidProps): React.ReactElement;
export default LanPenToSquareSolid;

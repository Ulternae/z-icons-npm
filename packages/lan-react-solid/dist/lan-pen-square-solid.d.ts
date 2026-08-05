import React from 'react';

export interface LanPenSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSquareSolid(props: LanPenSquareSolidProps): React.ReactElement;
export default LanPenSquareSolid;

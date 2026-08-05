import React from 'react';

export interface LanPencilLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilLineSolid(props: LanPencilLineSolidProps): React.ReactElement;
export default LanPencilLineSolid;

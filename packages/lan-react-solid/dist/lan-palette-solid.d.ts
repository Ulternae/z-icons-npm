import React from 'react';

export interface LanPaletteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaletteSolid(props: LanPaletteSolidProps): React.ReactElement;
export default LanPaletteSolid;

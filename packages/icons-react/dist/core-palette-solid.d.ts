import React from 'react';

export interface CorePaletteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaletteSolid: React.FC<CorePaletteSolidProps>;
export default CorePaletteSolid;

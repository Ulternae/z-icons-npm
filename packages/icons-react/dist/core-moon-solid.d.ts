import React from 'react';

export interface CoreMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoonSolid: React.FC<CoreMoonSolidProps>;
export default CoreMoonSolid;

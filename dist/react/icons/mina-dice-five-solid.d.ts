import React from 'react';

export interface MinaDiceFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceFiveSolid: React.FC<MinaDiceFiveSolidProps>;
export default MinaDiceFiveSolid;

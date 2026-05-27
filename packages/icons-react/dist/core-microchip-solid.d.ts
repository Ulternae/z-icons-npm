import React from 'react';

export interface CoreMicrochipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMicrochipSolid: React.FC<CoreMicrochipSolidProps>;
export default CoreMicrochipSolid;

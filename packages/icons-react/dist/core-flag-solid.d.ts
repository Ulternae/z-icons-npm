import React from 'react';

export interface CoreFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFlagSolid: React.FC<CoreFlagSolidProps>;
export default CoreFlagSolid;

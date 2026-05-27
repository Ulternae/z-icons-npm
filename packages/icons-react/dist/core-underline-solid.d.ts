import React from 'react';

export interface CoreUnderlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUnderlineSolid: React.FC<CoreUnderlineSolidProps>;
export default CoreUnderlineSolid;

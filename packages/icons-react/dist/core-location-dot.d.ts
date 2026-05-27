import React from 'react';

export interface CoreLocationDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLocationDot: React.FC<CoreLocationDotProps>;
export default CoreLocationDot;

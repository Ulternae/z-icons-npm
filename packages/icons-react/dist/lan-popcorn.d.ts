import React from 'react';

export interface LanPopcornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPopcorn: React.FC<LanPopcornProps>;
export default LanPopcorn;

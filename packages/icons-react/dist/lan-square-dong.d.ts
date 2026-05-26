import React from 'react';

export interface LanSquareDongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDong: React.FC<LanSquareDongProps>;
export default LanSquareDong;

import React from 'react';

export interface LanManholeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanManhole: React.FC<LanManholeProps>;
export default LanManhole;

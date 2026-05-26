import React from 'react';

export interface LanIProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanI: React.FC<LanIProps>;
export default LanI;

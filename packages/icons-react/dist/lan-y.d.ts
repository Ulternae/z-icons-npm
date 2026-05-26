import React from 'react';

export interface LanYProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanY: React.FC<LanYProps>;
export default LanY;

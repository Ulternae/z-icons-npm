import React from 'react';

export interface LanHeptagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeptagon: React.FC<LanHeptagonProps>;
export default LanHeptagon;

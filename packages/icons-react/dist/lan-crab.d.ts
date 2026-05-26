import React from 'react';

export interface LanCrabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrab: React.FC<LanCrabProps>;
export default LanCrab;

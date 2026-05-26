import React from 'react';

export interface LanRulerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRuler: React.FC<LanRulerProps>;
export default LanRuler;

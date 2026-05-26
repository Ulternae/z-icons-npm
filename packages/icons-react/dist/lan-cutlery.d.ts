import React from 'react';

export interface LanCutleryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCutlery: React.FC<LanCutleryProps>;
export default LanCutlery;

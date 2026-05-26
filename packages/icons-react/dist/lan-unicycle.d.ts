import React from 'react';

export interface LanUnicycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnicycle: React.FC<LanUnicycleProps>;
export default LanUnicycle;

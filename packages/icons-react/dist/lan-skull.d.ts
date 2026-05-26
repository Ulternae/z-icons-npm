import React from 'react';

export interface LanSkullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkull: React.FC<LanSkullProps>;
export default LanSkull;

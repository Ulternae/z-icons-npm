import React from 'react';

export interface LanImageBrokenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageBroken: React.FC<LanImageBrokenProps>;
export default LanImageBroken;

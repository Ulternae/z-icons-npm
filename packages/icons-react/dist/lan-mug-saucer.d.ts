import React from 'react';

export interface LanMugSaucerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugSaucer: React.FC<LanMugSaucerProps>;
export default LanMugSaucer;

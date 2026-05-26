import React from 'react';

export interface LanPersonSkiingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkiing: React.FC<LanPersonSkiingProps>;
export default LanPersonSkiing;

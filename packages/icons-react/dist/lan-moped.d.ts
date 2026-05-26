import React from 'react';

export interface LanMopedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoped: React.FC<LanMopedProps>;
export default LanMoped;

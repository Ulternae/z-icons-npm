import React from 'react';

export interface LanUserViewfinderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserViewfinder: React.FC<LanUserViewfinderProps>;
export default LanUserViewfinder;

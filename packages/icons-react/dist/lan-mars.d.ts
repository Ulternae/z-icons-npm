import React from 'react';

export interface LanMarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMars: React.FC<LanMarsProps>;
export default LanMars;

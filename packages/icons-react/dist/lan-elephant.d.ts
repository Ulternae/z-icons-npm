import React from 'react';

export interface LanElephantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanElephant: React.FC<LanElephantProps>;
export default LanElephant;

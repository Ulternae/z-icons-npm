import React from 'react';

export interface LanGlobeWwwProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeWww: React.FC<LanGlobeWwwProps>;
export default LanGlobeWww;

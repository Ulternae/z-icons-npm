import React from 'react';

export interface LanGlobeWwwSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeWwwSolid: React.FC<LanGlobeWwwSolidProps>;
export default LanGlobeWwwSolid;

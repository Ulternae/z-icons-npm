import React from 'react';

export interface LanGlassEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassEmptySolid: React.FC<LanGlassEmptySolidProps>;
export default LanGlassEmptySolid;

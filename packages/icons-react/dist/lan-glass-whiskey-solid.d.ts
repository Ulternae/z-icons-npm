import React from 'react';

export interface LanGlassWhiskeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWhiskeySolid: React.FC<LanGlassWhiskeySolidProps>;
export default LanGlassWhiskeySolid;

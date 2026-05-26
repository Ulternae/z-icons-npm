import React from 'react';

export interface LanGlassCheersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassCheersSolid: React.FC<LanGlassCheersSolidProps>;
export default LanGlassCheersSolid;

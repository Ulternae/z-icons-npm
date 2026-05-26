import React from 'react';

export interface LanCarMirrorsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarMirrorsSolid: React.FC<LanCarMirrorsSolidProps>;
export default LanCarMirrorsSolid;

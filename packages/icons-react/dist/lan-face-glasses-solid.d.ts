import React from 'react';

export interface LanFaceGlassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGlassesSolid: React.FC<LanFaceGlassesSolidProps>;
export default LanFaceGlassesSolid;

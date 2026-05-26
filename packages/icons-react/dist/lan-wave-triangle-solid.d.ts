import React from 'react';

export interface LanWaveTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveTriangleSolid: React.FC<LanWaveTriangleSolidProps>;
export default LanWaveTriangleSolid;

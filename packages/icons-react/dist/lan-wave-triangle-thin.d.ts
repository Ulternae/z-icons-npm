import React from 'react';

export interface LanWaveTriangleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveTriangleThin: React.FC<LanWaveTriangleThinProps>;
export default LanWaveTriangleThin;

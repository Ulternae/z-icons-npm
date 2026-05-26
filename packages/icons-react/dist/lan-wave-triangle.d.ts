import React from 'react';

export interface LanWaveTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveTriangle: React.FC<LanWaveTriangleProps>;
export default LanWaveTriangle;

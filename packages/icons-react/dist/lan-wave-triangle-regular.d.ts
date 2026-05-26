import React from 'react';

export interface LanWaveTriangleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveTriangleRegular: React.FC<LanWaveTriangleRegularProps>;
export default LanWaveTriangleRegular;

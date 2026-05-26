import React from 'react';

export interface LanKaabaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKaabaRegular: React.FC<LanKaabaRegularProps>;
export default LanKaabaRegular;

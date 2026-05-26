import React from 'react';

export interface LanTennisBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTennisBallRegular: React.FC<LanTennisBallRegularProps>;
export default LanTennisBallRegular;

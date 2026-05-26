import React from 'react';

export interface LanHeartHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartHalfRegular: React.FC<LanHeartHalfRegularProps>;
export default LanHeartHalfRegular;

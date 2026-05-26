import React from 'react';

export interface LanTentsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentsRegular: React.FC<LanTentsRegularProps>;
export default LanTentsRegular;

import React from 'react';

export interface LanMoundRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoundRegular: React.FC<LanMoundRegularProps>;
export default LanMoundRegular;

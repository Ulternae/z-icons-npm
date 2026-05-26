import React from 'react';

export interface LanQRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQRegular: React.FC<LanQRegularProps>;
export default LanQRegular;

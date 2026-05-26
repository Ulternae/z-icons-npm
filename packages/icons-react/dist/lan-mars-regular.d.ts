import React from 'react';

export interface LanMarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsRegular: React.FC<LanMarsRegularProps>;
export default LanMarsRegular;

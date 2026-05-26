import React from 'react';

export interface LanMicrowaveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrowaveRegular: React.FC<LanMicrowaveRegularProps>;
export default LanMicrowaveRegular;

import React from 'react';

export interface LanStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStopRegular: React.FC<LanStopRegularProps>;
export default LanStopRegular;

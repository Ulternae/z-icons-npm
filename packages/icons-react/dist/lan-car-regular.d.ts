import React from 'react';

export interface LanCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarRegular: React.FC<LanCarRegularProps>;
export default LanCarRegular;

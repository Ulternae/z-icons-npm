import React from 'react';

export interface LanVenusMarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusMarsRegular: React.FC<LanVenusMarsRegularProps>;
export default LanVenusMarsRegular;

import React from 'react';

export interface LanAngleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleRegular: React.FC<LanAngleRegularProps>;
export default LanAngleRegular;

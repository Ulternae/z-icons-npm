import React from 'react';

export interface LanAngleLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleLeftRegular: React.FC<LanAngleLeftRegularProps>;
export default LanAngleLeftRegular;

import React from 'react';

export interface LanAngleUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleUpRegular: React.FC<LanAngleUpRegularProps>;
export default LanAngleUpRegular;

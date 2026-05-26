import React from 'react';

export interface LanFaceWearyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWearyRegular: React.FC<LanFaceWearyRegularProps>;
export default LanFaceWearyRegular;

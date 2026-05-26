import React from 'react';

export interface LanStampRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStampRegular: React.FC<LanStampRegularProps>;
export default LanStampRegular;

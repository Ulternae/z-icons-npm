import React from 'react';

export interface LanTextRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextRegular: React.FC<LanTextRegularProps>;
export default LanTextRegular;

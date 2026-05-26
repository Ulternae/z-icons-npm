import React from 'react';

export interface LanInputTextRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputTextRegular: React.FC<LanInputTextRegularProps>;
export default LanInputTextRegular;

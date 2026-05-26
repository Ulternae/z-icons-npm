import React from 'react';

export interface LanGemRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGemRegular: React.FC<LanGemRegularProps>;
export default LanGemRegular;

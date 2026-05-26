import React from 'react';

export interface LanOctagonCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonCheckRegular: React.FC<LanOctagonCheckRegularProps>;
export default LanOctagonCheckRegular;

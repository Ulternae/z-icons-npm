import React from 'react';

export interface LanEnvelopeDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeDotRegular: React.FC<LanEnvelopeDotRegularProps>;
export default LanEnvelopeDotRegular;

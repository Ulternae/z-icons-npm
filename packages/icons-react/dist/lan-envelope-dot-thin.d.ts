import React from 'react';

export interface LanEnvelopeDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeDotThin: React.FC<LanEnvelopeDotThinProps>;
export default LanEnvelopeDotThin;

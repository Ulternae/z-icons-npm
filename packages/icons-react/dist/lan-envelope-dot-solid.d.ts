import React from 'react';

export interface LanEnvelopeDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeDotSolid: React.FC<LanEnvelopeDotSolidProps>;
export default LanEnvelopeDotSolid;

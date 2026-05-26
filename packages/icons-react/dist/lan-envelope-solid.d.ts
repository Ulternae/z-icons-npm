import React from 'react';

export interface LanEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeSolid: React.FC<LanEnvelopeSolidProps>;
export default LanEnvelopeSolid;

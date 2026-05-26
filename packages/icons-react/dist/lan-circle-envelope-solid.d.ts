import React from 'react';

export interface LanCircleEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEnvelopeSolid: React.FC<LanCircleEnvelopeSolidProps>;
export default LanCircleEnvelopeSolid;

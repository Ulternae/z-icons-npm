import React from 'react';

export interface LanPlaneUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneUpThin: React.FC<LanPlaneUpThinProps>;
export default LanPlaneUpThin;

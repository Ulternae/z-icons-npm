import React from 'react';

export interface LanObjectUnionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectUnionThin: React.FC<LanObjectUnionThinProps>;
export default LanObjectUnionThin;

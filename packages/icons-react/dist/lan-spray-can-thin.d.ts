import React from 'react';

export interface LanSprayCanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprayCanThin: React.FC<LanSprayCanThinProps>;
export default LanSprayCanThin;

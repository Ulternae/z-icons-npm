import React from 'react';

export interface LanStairCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStairCarThin: React.FC<LanStairCarThinProps>;
export default LanStairCarThin;

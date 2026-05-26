import React from 'react';

export interface LanFaceWoozyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWoozyThin: React.FC<LanFaceWoozyThinProps>;
export default LanFaceWoozyThin;

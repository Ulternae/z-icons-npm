import React from 'react';

export interface LanFaceViewfinderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceViewfinderThin: React.FC<LanFaceViewfinderThinProps>;
export default LanFaceViewfinderThin;

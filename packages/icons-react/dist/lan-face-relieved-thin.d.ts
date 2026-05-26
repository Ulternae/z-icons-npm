import React from 'react';

export interface LanFaceRelievedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceRelievedThin: React.FC<LanFaceRelievedThinProps>;
export default LanFaceRelievedThin;

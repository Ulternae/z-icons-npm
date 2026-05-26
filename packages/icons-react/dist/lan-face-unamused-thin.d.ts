import React from 'react';

export interface LanFaceUnamusedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceUnamusedThin: React.FC<LanFaceUnamusedThinProps>;
export default LanFaceUnamusedThin;

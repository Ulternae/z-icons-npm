import React from 'react';

export interface LanFaceExhalingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExhalingThin: React.FC<LanFaceExhalingThinProps>;
export default LanFaceExhalingThin;

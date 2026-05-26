import React from 'react';

export interface LanHeadSideSpeakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideSpeakThin: React.FC<LanHeadSideSpeakThinProps>;
export default LanHeadSideSpeakThin;

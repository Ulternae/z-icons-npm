import React from 'react';

export interface LanSpeakerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpeakerThin: React.FC<LanSpeakerThinProps>;
export default LanSpeakerThin;

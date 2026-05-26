import React from 'react';

export interface LanSpeakersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpeakersThin: React.FC<LanSpeakersThinProps>;
export default LanSpeakersThin;

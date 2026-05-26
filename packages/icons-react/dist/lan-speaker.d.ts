import React from 'react';

export interface LanSpeakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpeaker: React.FC<LanSpeakerProps>;
export default LanSpeaker;

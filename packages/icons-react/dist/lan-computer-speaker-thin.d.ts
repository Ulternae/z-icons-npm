import React from 'react';

export interface LanComputerSpeakerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerSpeakerThin: React.FC<LanComputerSpeakerThinProps>;
export default LanComputerSpeakerThin;

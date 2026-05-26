import React from 'react';

export interface LanComputerSpeakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerSpeaker: React.FC<LanComputerSpeakerProps>;
export default LanComputerSpeaker;

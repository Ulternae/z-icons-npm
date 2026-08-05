import React from 'react';

export interface LanComputerSpeakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerSpeaker(props: LanComputerSpeakerProps): React.ReactElement;
export default LanComputerSpeaker;

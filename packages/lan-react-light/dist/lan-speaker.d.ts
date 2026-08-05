import React from 'react';

export interface LanSpeakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpeaker(props: LanSpeakerProps): React.ReactElement;
export default LanSpeaker;

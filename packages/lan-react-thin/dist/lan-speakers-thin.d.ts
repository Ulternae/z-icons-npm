import React from 'react';

export interface LanSpeakersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpeakersThin(props: LanSpeakersThinProps): React.ReactElement;
export default LanSpeakersThin;

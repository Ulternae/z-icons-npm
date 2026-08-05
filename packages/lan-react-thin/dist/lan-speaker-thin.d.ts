import React from 'react';

export interface LanSpeakerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpeakerThin(props: LanSpeakerThinProps): React.ReactElement;
export default LanSpeakerThin;

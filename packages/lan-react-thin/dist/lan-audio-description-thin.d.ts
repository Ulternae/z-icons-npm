import React from 'react';

export interface LanAudioDescriptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAudioDescriptionThin(props: LanAudioDescriptionThinProps): React.ReactElement;
export default LanAudioDescriptionThin;

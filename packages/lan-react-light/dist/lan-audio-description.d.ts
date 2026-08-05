import React from 'react';

export interface LanAudioDescriptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAudioDescription(props: LanAudioDescriptionProps): React.ReactElement;
export default LanAudioDescription;

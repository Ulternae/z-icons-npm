import React from 'react';

export interface LanAudioDescriptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAudioDescriptionRegular(props: LanAudioDescriptionRegularProps): React.ReactElement;
export default LanAudioDescriptionRegular;

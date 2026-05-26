import React from 'react';

export interface LanAudioDescriptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAudioDescriptionRegular: React.FC<LanAudioDescriptionRegularProps>;
export default LanAudioDescriptionRegular;

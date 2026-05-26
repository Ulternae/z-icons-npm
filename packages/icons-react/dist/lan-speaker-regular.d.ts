import React from 'react';

export interface LanSpeakerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpeakerRegular: React.FC<LanSpeakerRegularProps>;
export default LanSpeakerRegular;

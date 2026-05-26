import React from 'react';

export interface LanFileAudioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAudioRegular: React.FC<LanFileAudioRegularProps>;
export default LanFileAudioRegular;

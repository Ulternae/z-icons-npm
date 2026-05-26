import React from 'react';

export interface LanSpeakersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpeakersRegular: React.FC<LanSpeakersRegularProps>;
export default LanSpeakersRegular;

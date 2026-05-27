import React from 'react';

export interface CoreSpeakerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSpeakerRegularDuo: React.FC<CoreSpeakerRegularDuoProps>;
export default CoreSpeakerRegularDuo;

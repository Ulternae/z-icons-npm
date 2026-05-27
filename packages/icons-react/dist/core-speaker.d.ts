import React from 'react';

export interface CoreSpeakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSpeaker: React.FC<CoreSpeakerProps>;
export default CoreSpeaker;

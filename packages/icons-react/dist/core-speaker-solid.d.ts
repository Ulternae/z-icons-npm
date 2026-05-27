import React from 'react';

export interface CoreSpeakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSpeakerSolid: React.FC<CoreSpeakerSolidProps>;
export default CoreSpeakerSolid;

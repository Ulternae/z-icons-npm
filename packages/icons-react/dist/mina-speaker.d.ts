import React from 'react';

export interface MinaSpeakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSpeaker: React.FC<MinaSpeakerProps>;
export default MinaSpeaker;

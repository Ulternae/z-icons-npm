import React from 'react';

export interface MinaSpeakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSpeakerSolid: React.FC<MinaSpeakerSolidProps>;
export default MinaSpeakerSolid;

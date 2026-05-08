import React from 'react';

export interface MinaMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMicrophoneSolid: React.FC<MinaMicrophoneSolidProps>;
export default MinaMicrophoneSolid;

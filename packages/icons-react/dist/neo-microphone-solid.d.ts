import React from 'react';

export interface NeoMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMicrophoneSolid: React.FC<NeoMicrophoneSolidProps>;
export default NeoMicrophoneSolid;

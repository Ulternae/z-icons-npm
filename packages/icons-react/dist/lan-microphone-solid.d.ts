import React from 'react';

export interface LanMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneSolid: React.FC<LanMicrophoneSolidProps>;
export default LanMicrophoneSolid;

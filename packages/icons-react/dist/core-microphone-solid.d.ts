import React from 'react';

export interface CoreMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMicrophoneSolid: React.FC<CoreMicrophoneSolidProps>;
export default CoreMicrophoneSolid;

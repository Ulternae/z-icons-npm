import React from 'react';

export interface NeoMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMicrophone: React.FC<NeoMicrophoneProps>;
export default NeoMicrophone;

import React from 'react';

export interface MinaMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMicrophone: React.FC<MinaMicrophoneProps>;
export default MinaMicrophone;

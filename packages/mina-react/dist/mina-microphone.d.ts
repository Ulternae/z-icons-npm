import React from 'react';

export interface MinaMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMicrophone(props: MinaMicrophoneProps): React.ReactElement;
export default MinaMicrophone;

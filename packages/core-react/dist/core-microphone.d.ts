import React from 'react';

export interface CoreMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMicrophone(props: CoreMicrophoneProps): React.ReactElement;
export default CoreMicrophone;

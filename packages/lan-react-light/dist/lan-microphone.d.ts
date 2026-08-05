import React from 'react';

export interface LanMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrophone(props: LanMicrophoneProps): React.ReactElement;
export default LanMicrophone;

import React from 'react';

export interface LanUserMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMicrophone(props: LanUserMicrophoneProps): React.ReactElement;
export default LanUserMicrophone;

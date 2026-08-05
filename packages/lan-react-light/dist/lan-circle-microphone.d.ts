import React from 'react';

export interface LanCircleMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMicrophone(props: LanCircleMicrophoneProps): React.ReactElement;
export default LanCircleMicrophone;

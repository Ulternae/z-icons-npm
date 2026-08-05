import React from 'react';

export interface LanSquareMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMicrophone(props: LanSquareMicrophoneProps): React.ReactElement;
export default LanSquareMicrophone;

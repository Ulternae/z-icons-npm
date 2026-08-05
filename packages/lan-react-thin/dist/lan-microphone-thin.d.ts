import React from 'react';

export interface LanMicrophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrophoneThin(props: LanMicrophoneThinProps): React.ReactElement;
export default LanMicrophoneThin;

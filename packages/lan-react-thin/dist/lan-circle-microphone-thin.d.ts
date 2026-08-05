import React from 'react';

export interface LanCircleMicrophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMicrophoneThin(props: LanCircleMicrophoneThinProps): React.ReactElement;
export default LanCircleMicrophoneThin;

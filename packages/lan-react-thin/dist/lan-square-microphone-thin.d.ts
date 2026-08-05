import React from 'react';

export interface LanSquareMicrophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMicrophoneThin(props: LanSquareMicrophoneThinProps): React.ReactElement;
export default LanSquareMicrophoneThin;

import React from 'react';

export interface LanGenderlessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGenderlessThin(props: LanGenderlessThinProps): React.ReactElement;
export default LanGenderlessThin;

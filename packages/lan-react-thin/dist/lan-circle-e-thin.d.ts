import React from 'react';

export interface LanCircleEThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEThin(props: LanCircleEThinProps): React.ReactElement;
export default LanCircleEThin;

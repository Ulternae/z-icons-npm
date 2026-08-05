import React from 'react';

export interface LanInfoSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfoSquareThin(props: LanInfoSquareThinProps): React.ReactElement;
export default LanInfoSquareThin;

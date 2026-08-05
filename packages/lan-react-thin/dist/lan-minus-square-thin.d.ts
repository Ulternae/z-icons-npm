import React from 'react';

export interface LanMinusSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusSquareThin(props: LanMinusSquareThinProps): React.ReactElement;
export default LanMinusSquareThin;

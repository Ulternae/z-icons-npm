import React from 'react';

export interface LanBracketsSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketsSquareThin(props: LanBracketsSquareThinProps): React.ReactElement;
export default LanBracketsSquareThin;

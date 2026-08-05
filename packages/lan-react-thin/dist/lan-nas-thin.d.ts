import React from 'react';

export interface LanNasThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNasThin(props: LanNasThinProps): React.ReactElement;
export default LanNasThin;

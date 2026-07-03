import React from 'react';

export interface BruBlackTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBlackTie(props: BruBlackTieProps): React.ReactElement;
export default BruBlackTie;

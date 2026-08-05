import React from 'react';

export interface LanUserTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTie(props: LanUserTieProps): React.ReactElement;
export default LanUserTie;

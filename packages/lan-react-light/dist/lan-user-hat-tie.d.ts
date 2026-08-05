import React from 'react';

export interface LanUserHatTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHatTie(props: LanUserHatTieProps): React.ReactElement;
export default LanUserHatTie;

import React from 'react';

export interface LanSirenOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSirenOnThin(props: LanSirenOnThinProps): React.ReactElement;
export default LanSirenOnThin;

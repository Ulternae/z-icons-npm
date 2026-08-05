import React from 'react';

export interface LanCarSirenOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSirenOnThin(props: LanCarSirenOnThinProps): React.ReactElement;
export default LanCarSirenOnThin;

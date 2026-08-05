import React from 'react';

export interface LanCarSirenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSirenThin(props: LanCarSirenThinProps): React.ReactElement;
export default LanCarSirenThin;

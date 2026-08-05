import React from 'react';

export interface LanCarSirenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSiren(props: LanCarSirenProps): React.ReactElement;
export default LanCarSiren;

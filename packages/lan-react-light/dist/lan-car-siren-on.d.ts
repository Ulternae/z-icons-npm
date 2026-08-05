import React from 'react';

export interface LanCarSirenOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSirenOn(props: LanCarSirenOnProps): React.ReactElement;
export default LanCarSirenOn;

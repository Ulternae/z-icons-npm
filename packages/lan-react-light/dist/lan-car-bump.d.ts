import React from 'react';

export interface LanCarBumpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBump(props: LanCarBumpProps): React.ReactElement;
export default LanCarBump;

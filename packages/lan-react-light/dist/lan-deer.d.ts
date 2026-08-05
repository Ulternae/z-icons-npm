import React from 'react';

export interface LanDeerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeer(props: LanDeerProps): React.ReactElement;
export default LanDeer;

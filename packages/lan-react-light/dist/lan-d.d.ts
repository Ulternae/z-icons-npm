import React from 'react';

export interface LanDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanD(props: LanDProps): React.ReactElement;
export default LanD;

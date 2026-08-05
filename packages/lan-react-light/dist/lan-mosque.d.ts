import React from 'react';

export interface LanMosqueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosque(props: LanMosqueProps): React.ReactElement;
export default LanMosque;

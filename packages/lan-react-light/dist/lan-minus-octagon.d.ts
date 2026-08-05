import React from 'react';

export interface LanMinusOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusOctagon(props: LanMinusOctagonProps): React.ReactElement;
export default LanMinusOctagon;

import React from 'react';

export interface LanOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagon(props: LanOctagonProps): React.ReactElement;
export default LanOctagon;

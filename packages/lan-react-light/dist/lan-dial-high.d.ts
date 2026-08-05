import React from 'react';

export interface LanDialHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialHigh(props: LanDialHighProps): React.ReactElement;
export default LanDialHigh;

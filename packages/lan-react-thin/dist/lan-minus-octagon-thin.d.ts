import React from 'react';

export interface LanMinusOctagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusOctagonThin(props: LanMinusOctagonThinProps): React.ReactElement;
export default LanMinusOctagonThin;

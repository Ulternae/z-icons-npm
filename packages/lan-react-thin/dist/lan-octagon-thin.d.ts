import React from 'react';

export interface LanOctagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonThin(props: LanOctagonThinProps): React.ReactElement;
export default LanOctagonThin;

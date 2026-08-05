import React from 'react';

export interface LanOctagonXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonXmarkThin(props: LanOctagonXmarkThinProps): React.ReactElement;
export default LanOctagonXmarkThin;

import React from 'react';

export interface LanOctagonPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonPlusThin(props: LanOctagonPlusThinProps): React.ReactElement;
export default LanOctagonPlusThin;

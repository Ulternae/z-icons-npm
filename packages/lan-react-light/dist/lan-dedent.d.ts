import React from 'react';

export interface LanDedentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDedent(props: LanDedentProps): React.ReactElement;
export default LanDedent;

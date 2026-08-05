import React from 'react';

export interface LanTally2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTally2(props: LanTally2Props): React.ReactElement;
export default LanTally2;

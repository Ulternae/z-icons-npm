import React from 'react';

export interface LanTally4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTally4(props: LanTally4Props): React.ReactElement;
export default LanTally4;

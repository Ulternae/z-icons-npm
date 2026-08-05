import React from 'react';

export interface LanTally3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTally3(props: LanTally3Props): React.ReactElement;
export default LanTally3;

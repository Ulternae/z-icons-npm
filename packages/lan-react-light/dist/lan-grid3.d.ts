import React from 'react';

export interface LanGrid3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid3(props: LanGrid3Props): React.ReactElement;
export default LanGrid3;

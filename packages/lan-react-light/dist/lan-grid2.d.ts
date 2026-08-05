import React from 'react';

export interface LanGrid2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2(props: LanGrid2Props): React.ReactElement;
export default LanGrid2;

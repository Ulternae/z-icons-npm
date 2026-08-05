import React from 'react';

export interface LanGrid4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid4(props: LanGrid4Props): React.ReactElement;
export default LanGrid4;

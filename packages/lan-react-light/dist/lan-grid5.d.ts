import React from 'react';

export interface LanGrid5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid5(props: LanGrid5Props): React.ReactElement;
export default LanGrid5;

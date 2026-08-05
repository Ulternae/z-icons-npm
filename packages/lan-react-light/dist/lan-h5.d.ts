import React from 'react';

export interface LanH5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH5(props: LanH5Props): React.ReactElement;
export default LanH5;

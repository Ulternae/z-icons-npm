import React from 'react';

export interface LanH4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH4(props: LanH4Props): React.ReactElement;
export default LanH4;

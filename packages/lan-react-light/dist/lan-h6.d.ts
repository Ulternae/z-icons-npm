import React from 'react';

export interface LanH6Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH6(props: LanH6Props): React.ReactElement;
export default LanH6;

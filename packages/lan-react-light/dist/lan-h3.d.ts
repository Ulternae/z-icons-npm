import React from 'react';

export interface LanH3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH3(props: LanH3Props): React.ReactElement;
export default LanH3;

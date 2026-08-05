import React from 'react';

export interface LanCircle3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle3(props: LanCircle3Props): React.ReactElement;
export default LanCircle3;

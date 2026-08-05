import React from 'react';

export interface LanCircle1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle1(props: LanCircle1Props): React.ReactElement;
export default LanCircle1;

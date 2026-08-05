import React from 'react';

export interface LanCircle5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle5(props: LanCircle5Props): React.ReactElement;
export default LanCircle5;

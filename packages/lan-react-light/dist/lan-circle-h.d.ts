import React from 'react';

export interface LanCircleHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleH(props: LanCircleHProps): React.ReactElement;
export default LanCircleH;

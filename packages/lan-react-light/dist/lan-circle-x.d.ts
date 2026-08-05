import React from 'react';

export interface LanCircleXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleX(props: LanCircleXProps): React.ReactElement;
export default LanCircleX;

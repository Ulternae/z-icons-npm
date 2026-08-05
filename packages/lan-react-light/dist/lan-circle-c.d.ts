import React from 'react';

export interface LanCircleCProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleC(props: LanCircleCProps): React.ReactElement;
export default LanCircleC;

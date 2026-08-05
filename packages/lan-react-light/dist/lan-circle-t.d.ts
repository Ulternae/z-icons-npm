import React from 'react';

export interface LanCircleTProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleT(props: LanCircleTProps): React.ReactElement;
export default LanCircleT;

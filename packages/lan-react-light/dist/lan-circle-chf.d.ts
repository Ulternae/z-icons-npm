import React from 'react';

export interface LanCircleChfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleChf(props: LanCircleChfProps): React.ReactElement;
export default LanCircleChf;

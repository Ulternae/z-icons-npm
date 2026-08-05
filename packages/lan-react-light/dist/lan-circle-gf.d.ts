import React from 'react';

export interface LanCircleGfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGf(props: LanCircleGfProps): React.ReactElement;
export default LanCircleGf;

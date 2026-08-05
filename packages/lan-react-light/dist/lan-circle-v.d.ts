import React from 'react';

export interface LanCircleVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleV(props: LanCircleVProps): React.ReactElement;
export default LanCircleV;

import React from 'react';

export interface LanCircleWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleW(props: LanCircleWProps): React.ReactElement;
export default LanCircleW;

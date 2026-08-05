import React from 'react';

export interface LanCircleDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleD(props: LanCircleDProps): React.ReactElement;
export default LanCircleD;

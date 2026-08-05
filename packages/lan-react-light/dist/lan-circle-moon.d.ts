import React from 'react';

export interface LanCircleMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMoon(props: LanCircleMoonProps): React.ReactElement;
export default LanCircleMoon;

import React from 'react';

export interface LanCircleLiraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLira(props: LanCircleLiraProps): React.ReactElement;
export default LanCircleLira;

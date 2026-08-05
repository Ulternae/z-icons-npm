import React from 'react';

export interface LanCircleGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleG(props: LanCircleGProps): React.ReactElement;
export default LanCircleG;

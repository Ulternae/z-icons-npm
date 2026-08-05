import React from 'react';

export interface LanCircleNairaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNaira(props: LanCircleNairaProps): React.ReactElement;
export default LanCircleNaira;

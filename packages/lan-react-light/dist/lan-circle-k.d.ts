import React from 'react';

export interface LanCircleKProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleK(props: LanCircleKProps): React.ReactElement;
export default LanCircleK;

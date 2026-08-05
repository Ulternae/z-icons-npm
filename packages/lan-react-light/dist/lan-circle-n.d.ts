import React from 'react';

export interface LanCircleNProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleN(props: LanCircleNProps): React.ReactElement;
export default LanCircleN;

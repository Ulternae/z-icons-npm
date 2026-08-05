import React from 'react';

export interface LanCowbellCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowbellCirclePlusThin(props: LanCowbellCirclePlusThinProps): React.ReactElement;
export default LanCowbellCirclePlusThin;

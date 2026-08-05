import React from 'react';

export interface LanCircleCediThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCediThin(props: LanCircleCediThinProps): React.ReactElement;
export default LanCircleCediThin;

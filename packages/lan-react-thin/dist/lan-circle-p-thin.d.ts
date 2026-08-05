import React from 'react';

export interface LanCirclePThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePThin(props: LanCirclePThinProps): React.ReactElement;
export default LanCirclePThin;

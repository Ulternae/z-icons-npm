import React from 'react';

export interface LanCircleCThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCThin(props: LanCircleCThinProps): React.ReactElement;
export default LanCircleCThin;

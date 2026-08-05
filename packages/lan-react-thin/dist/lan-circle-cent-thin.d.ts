import React from 'react';

export interface LanCircleCentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCentThin(props: LanCircleCentThinProps): React.ReactElement;
export default LanCircleCentThin;

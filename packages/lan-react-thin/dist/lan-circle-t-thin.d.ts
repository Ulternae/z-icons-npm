import React from 'react';

export interface LanCircleTThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTThin(props: LanCircleTThinProps): React.ReactElement;
export default LanCircleTThin;

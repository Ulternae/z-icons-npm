import React from 'react';

export interface LanCircleDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDotThin(props: LanCircleDotThinProps): React.ReactElement;
export default LanCircleDotThin;

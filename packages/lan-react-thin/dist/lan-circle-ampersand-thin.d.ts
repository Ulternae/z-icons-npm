import React from 'react';

export interface LanCircleAmpersandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleAmpersandThin(props: LanCircleAmpersandThinProps): React.ReactElement;
export default LanCircleAmpersandThin;

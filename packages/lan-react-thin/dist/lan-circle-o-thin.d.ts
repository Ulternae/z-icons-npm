import React from 'react';

export interface LanCircleOThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleOThin(props: LanCircleOThinProps): React.ReactElement;
export default LanCircleOThin;

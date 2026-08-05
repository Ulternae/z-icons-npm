import React from 'react';

export interface LanCircleUThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUThin(props: LanCircleUThinProps): React.ReactElement;
export default LanCircleUThin;

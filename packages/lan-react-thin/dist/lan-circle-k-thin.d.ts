import React from 'react';

export interface LanCircleKThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleKThin(props: LanCircleKThinProps): React.ReactElement;
export default LanCircleKThin;

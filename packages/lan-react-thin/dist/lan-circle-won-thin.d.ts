import React from 'react';

export interface LanCircleWonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWonThin(props: LanCircleWonThinProps): React.ReactElement;
export default LanCircleWonThin;

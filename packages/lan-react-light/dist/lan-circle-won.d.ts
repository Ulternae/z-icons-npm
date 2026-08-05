import React from 'react';

export interface LanCircleWonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWon(props: LanCircleWonProps): React.ReactElement;
export default LanCircleWon;

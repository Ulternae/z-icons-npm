import React from 'react';

export interface LanBallPileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallPile(props: LanBallPileProps): React.ReactElement;
export default LanBallPile;

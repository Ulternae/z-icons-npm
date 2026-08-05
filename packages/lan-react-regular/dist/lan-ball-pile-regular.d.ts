import React from 'react';

export interface LanBallPileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallPileRegular(props: LanBallPileRegularProps): React.ReactElement;
export default LanBallPileRegular;

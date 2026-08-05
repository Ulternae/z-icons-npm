import React from 'react';

export interface LanStarfighterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarfighterRegular(props: LanStarfighterRegularProps): React.ReactElement;
export default LanStarfighterRegular;

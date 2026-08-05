import React from 'react';

export interface LanStarshipFreighterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarshipFreighterRegular(props: LanStarshipFreighterRegularProps): React.ReactElement;
export default LanStarshipFreighterRegular;

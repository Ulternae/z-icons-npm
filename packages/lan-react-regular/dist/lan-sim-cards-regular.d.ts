import React from 'react';

export interface LanSimCardsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSimCardsRegular(props: LanSimCardsRegularProps): React.ReactElement;
export default LanSimCardsRegular;

import React from 'react';

export interface LanCardsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardsRegular(props: LanCardsRegularProps): React.ReactElement;
export default LanCardsRegular;

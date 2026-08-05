import React from 'react';

export interface LanCardsBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardsBlankRegular(props: LanCardsBlankRegularProps): React.ReactElement;
export default LanCardsBlankRegular;

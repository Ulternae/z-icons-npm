import React from 'react';

export interface LanCardsBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardsBlank(props: LanCardsBlankProps): React.ReactElement;
export default LanCardsBlank;

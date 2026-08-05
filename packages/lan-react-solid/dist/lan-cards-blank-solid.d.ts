import React from 'react';

export interface LanCardsBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardsBlankSolid(props: LanCardsBlankSolidProps): React.ReactElement;
export default LanCardsBlankSolid;

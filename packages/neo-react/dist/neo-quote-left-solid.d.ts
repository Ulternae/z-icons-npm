import React from 'react';

export interface NeoQuoteLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoQuoteLeftSolid(props: NeoQuoteLeftSolidProps): React.ReactElement;
export default NeoQuoteLeftSolid;

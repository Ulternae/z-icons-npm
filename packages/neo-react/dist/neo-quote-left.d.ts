import React from 'react';

export interface NeoQuoteLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoQuoteLeft(props: NeoQuoteLeftProps): React.ReactElement;
export default NeoQuoteLeft;

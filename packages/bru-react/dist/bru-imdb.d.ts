import React from 'react';

export interface BruImdbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruImdb(props: BruImdbProps): React.ReactElement;
export default BruImdb;

import React from 'react';

export interface BruYahooProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYahoo(props: BruYahooProps): React.ReactElement;
export default BruYahoo;

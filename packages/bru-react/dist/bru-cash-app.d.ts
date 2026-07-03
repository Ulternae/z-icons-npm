import React from 'react';

export interface BruCashAppProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCashApp(props: BruCashAppProps): React.ReactElement;
export default BruCashApp;

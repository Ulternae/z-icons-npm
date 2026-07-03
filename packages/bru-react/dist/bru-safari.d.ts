import React from 'react';

export interface BruSafariProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSafari(props: BruSafariProps): React.ReactElement;
export default BruSafari;

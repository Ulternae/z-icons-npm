import React from 'react';

export interface BruSquareGooglePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareGooglePlus(props: BruSquareGooglePlusProps): React.ReactElement;
export default BruSquareGooglePlus;

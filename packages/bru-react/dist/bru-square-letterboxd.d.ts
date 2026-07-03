import React from 'react';

export interface BruSquareLetterboxdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareLetterboxd(props: BruSquareLetterboxdProps): React.ReactElement;
export default BruSquareLetterboxd;

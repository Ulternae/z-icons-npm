import React from 'react';

export interface BruLetterboxdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLetterboxd(props: BruLetterboxdProps): React.ReactElement;
export default BruLetterboxd;

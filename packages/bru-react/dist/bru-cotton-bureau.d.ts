import React from 'react';

export interface BruCottonBureauProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCottonBureau(props: BruCottonBureauProps): React.ReactElement;
export default BruCottonBureau;

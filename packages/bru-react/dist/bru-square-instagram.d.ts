import React from 'react';

export interface BruSquareInstagramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareInstagram(props: BruSquareInstagramProps): React.ReactElement;
export default BruSquareInstagram;

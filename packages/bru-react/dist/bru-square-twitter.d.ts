import React from 'react';

export interface BruSquareTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareTwitter(props: BruSquareTwitterProps): React.ReactElement;
export default BruSquareTwitter;

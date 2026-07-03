import React from 'react';

export interface BruSquarespaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquarespace(props: BruSquarespaceProps): React.ReactElement;
export default BruSquarespace;

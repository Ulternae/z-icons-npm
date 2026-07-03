import React from 'react';

export interface BruConfluenceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruConfluence(props: BruConfluenceProps): React.ReactElement;
export default BruConfluence;

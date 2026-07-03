import React from 'react';

export interface BruWikipediaWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWikipediaW(props: BruWikipediaWProps): React.ReactElement;
export default BruWikipediaW;

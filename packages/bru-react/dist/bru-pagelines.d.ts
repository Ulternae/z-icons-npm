import React from 'react';

export interface BruPagelinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPagelines(props: BruPagelinesProps): React.ReactElement;
export default BruPagelines;

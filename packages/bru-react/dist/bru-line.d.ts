import React from 'react';

export interface BruLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLine(props: BruLineProps): React.ReactElement;
export default BruLine;

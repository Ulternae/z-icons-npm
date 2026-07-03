import React from 'react';

export interface BruUspsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUsps(props: BruUspsProps): React.ReactElement;
export default BruUsps;

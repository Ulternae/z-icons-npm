import React from 'react';

export interface BruDeviantartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDeviantart(props: BruDeviantartProps): React.ReactElement;
export default BruDeviantart;

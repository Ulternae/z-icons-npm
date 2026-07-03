import React from 'react';

export interface BruUpsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUps(props: BruUpsProps): React.ReactElement;
export default BruUps;

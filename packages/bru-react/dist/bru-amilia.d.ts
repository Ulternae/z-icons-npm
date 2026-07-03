import React from 'react';

export interface BruAmiliaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAmilia(props: BruAmiliaProps): React.ReactElement;
export default BruAmilia;

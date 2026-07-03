import React from 'react';

export interface BruHouzzProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHouzz(props: BruHouzzProps): React.ReactElement;
export default BruHouzz;

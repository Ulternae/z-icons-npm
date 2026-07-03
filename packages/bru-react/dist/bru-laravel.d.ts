import React from 'react';

export interface BruLaravelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLaravel(props: BruLaravelProps): React.ReactElement;
export default BruLaravel;

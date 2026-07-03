import React from 'react';

export interface BruElloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEllo(props: BruElloProps): React.ReactElement;
export default BruEllo;

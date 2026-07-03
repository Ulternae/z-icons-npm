import React from 'react';

export interface BruSithProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSith(props: BruSithProps): React.ReactElement;
export default BruSith;

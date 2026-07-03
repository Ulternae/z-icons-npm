import React from 'react';

export interface BruSuppleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSupple(props: BruSuppleProps): React.ReactElement;
export default BruSupple;

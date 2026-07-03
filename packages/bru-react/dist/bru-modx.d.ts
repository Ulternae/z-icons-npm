import React from 'react';

export interface BruModxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruModx(props: BruModxProps): React.ReactElement;
export default BruModx;

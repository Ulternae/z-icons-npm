import React from 'react';

export interface BruEleventyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEleventy(props: BruEleventyProps): React.ReactElement;
export default BruEleventy;

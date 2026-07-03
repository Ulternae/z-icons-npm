import React from 'react';

export interface BruSquareLastfmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareLastfm(props: BruSquareLastfmProps): React.ReactElement;
export default BruSquareLastfm;

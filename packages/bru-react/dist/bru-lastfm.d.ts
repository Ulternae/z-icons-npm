import React from 'react';

export interface BruLastfmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLastfm(props: BruLastfmProps): React.ReactElement;
export default BruLastfm;

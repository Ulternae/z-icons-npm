import React from 'react';

export interface BruAdnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAdn(props: BruAdnProps): React.ReactElement;
export default BruAdn;

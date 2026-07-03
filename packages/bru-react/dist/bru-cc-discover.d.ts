import React from 'react';

export interface BruCcDiscoverProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcDiscover(props: BruCcDiscoverProps): React.ReactElement;
export default BruCcDiscover;

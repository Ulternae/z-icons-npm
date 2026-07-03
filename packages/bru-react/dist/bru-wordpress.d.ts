import React from 'react';

export interface BruWordpressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWordpress(props: BruWordpressProps): React.ReactElement;
export default BruWordpress;

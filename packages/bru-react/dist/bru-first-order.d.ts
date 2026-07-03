import React from 'react';

export interface BruFirstOrderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFirstOrder(props: BruFirstOrderProps): React.ReactElement;
export default BruFirstOrder;

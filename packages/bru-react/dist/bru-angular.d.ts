import React from 'react';

export interface BruAngularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAngular(props: BruAngularProps): React.ReactElement;
export default BruAngular;

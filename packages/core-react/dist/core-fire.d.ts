import React from 'react';

export interface CoreFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFire(props: CoreFireProps): React.ReactElement;
export default CoreFire;

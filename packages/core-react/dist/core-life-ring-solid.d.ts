import React from 'react';

export interface CoreLifeRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLifeRingSolid(props: CoreLifeRingSolidProps): React.ReactElement;
export default CoreLifeRingSolid;

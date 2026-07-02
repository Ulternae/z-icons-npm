import React from 'react';

export interface CorePersonBikingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePersonBikingSolid(props: CorePersonBikingSolidProps): React.ReactElement;
export default CorePersonBikingSolid;

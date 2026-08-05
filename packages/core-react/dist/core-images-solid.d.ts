import React from 'react';

export interface CoreImagesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreImagesSolid(props: CoreImagesSolidProps): React.ReactElement;
export default CoreImagesSolid;

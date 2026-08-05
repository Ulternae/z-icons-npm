import React from 'react';

export interface CoreUserMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUserMinusSolid(props: CoreUserMinusSolidProps): React.ReactElement;
export default CoreUserMinusSolid;

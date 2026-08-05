import React from 'react';

export interface CoreBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBusSolid(props: CoreBusSolidProps): React.ReactElement;
export default CoreBusSolid;

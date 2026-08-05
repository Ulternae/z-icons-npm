import React from 'react';

export interface CoreFileMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFileMinusSolid(props: CoreFileMinusSolidProps): React.ReactElement;
export default CoreFileMinusSolid;

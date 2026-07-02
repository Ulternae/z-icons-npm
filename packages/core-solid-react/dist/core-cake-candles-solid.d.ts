import React from 'react';

export interface CoreCakeCandlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCakeCandlesSolid(props: CoreCakeCandlesSolidProps): React.ReactElement;
export default CoreCakeCandlesSolid;

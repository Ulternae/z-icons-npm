import React from 'react';

export interface MinaMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusSolid(props: MinaMinusSolidProps): React.ReactElement;
export default MinaMinusSolid;

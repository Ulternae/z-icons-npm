import React from 'react';

export interface MinaBookMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookMinusSolid(props: MinaBookMinusSolidProps): React.ReactElement;
export default MinaBookMinusSolid;

import React from 'react';

export interface MinaFileMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileMinusSolid(props: MinaFileMinusSolidProps): React.ReactElement;
export default MinaFileMinusSolid;

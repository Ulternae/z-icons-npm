import React from 'react';

export interface NeoMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMinusSolid(props: NeoMinusSolidProps): React.ReactElement;
export default NeoMinusSolid;

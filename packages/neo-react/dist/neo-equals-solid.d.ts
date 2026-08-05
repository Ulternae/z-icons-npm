import React from 'react';

export interface NeoEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEqualsSolid(props: NeoEqualsSolidProps): React.ReactElement;
export default NeoEqualsSolid;

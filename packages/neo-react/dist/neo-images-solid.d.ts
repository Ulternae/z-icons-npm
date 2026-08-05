import React from 'react';

export interface NeoImagesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoImagesSolid(props: NeoImagesSolidProps): React.ReactElement;
export default NeoImagesSolid;

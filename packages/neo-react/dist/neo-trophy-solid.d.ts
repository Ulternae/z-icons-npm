import React from 'react';

export interface NeoTrophySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrophySolid(props: NeoTrophySolidProps): React.ReactElement;
export default NeoTrophySolid;

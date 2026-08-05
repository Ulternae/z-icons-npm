import React from 'react';

export interface NeoUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUsersSolid(props: NeoUsersSolidProps): React.ReactElement;
export default NeoUsersSolid;

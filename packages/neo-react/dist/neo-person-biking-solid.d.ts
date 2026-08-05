import React from 'react';

export interface NeoPersonBikingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPersonBikingSolid(props: NeoPersonBikingSolidProps): React.ReactElement;
export default NeoPersonBikingSolid;

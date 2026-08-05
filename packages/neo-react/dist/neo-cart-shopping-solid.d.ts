import React from 'react';

export interface NeoCartShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCartShoppingSolid(props: NeoCartShoppingSolidProps): React.ReactElement;
export default NeoCartShoppingSolid;

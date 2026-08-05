import React from 'react';

export interface NeoShirtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShirtSolid(props: NeoShirtSolidProps): React.ReactElement;
export default NeoShirtSolid;

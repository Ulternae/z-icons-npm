import React from 'react';

export interface NeoMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMapSolid(props: NeoMapSolidProps): React.ReactElement;
export default NeoMapSolid;

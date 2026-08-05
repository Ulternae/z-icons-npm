import React from 'react';

export interface NeoTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTagSolid(props: NeoTagSolidProps): React.ReactElement;
export default NeoTagSolid;

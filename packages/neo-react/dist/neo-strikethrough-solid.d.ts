import React from 'react';

export interface NeoStrikethroughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStrikethroughSolid(props: NeoStrikethroughSolidProps): React.ReactElement;
export default NeoStrikethroughSolid;

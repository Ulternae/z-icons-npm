import React from 'react';

export interface NeoThumbsUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoThumbsUpSolid(props: NeoThumbsUpSolidProps): React.ReactElement;
export default NeoThumbsUpSolid;

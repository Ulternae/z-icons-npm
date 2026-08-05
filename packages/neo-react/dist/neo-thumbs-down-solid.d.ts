import React from 'react';

export interface NeoThumbsDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoThumbsDownSolid(props: NeoThumbsDownSolidProps): React.ReactElement;
export default NeoThumbsDownSolid;

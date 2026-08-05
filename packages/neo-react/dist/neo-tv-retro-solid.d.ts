import React from 'react';

export interface NeoTvRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTvRetroSolid(props: NeoTvRetroSolidProps): React.ReactElement;
export default NeoTvRetroSolid;

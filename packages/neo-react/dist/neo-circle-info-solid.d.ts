import React from 'react';

export interface NeoCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleInfoSolid(props: NeoCircleInfoSolidProps): React.ReactElement;
export default NeoCircleInfoSolid;

import React from 'react';

export interface NeoMugHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMugHotSolid(props: NeoMugHotSolidProps): React.ReactElement;
export default NeoMugHotSolid;

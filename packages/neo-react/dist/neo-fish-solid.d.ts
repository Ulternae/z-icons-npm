import React from 'react';

export interface NeoFishSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFishSolid(props: NeoFishSolidProps): React.ReactElement;
export default NeoFishSolid;

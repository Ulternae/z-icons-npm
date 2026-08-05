import React from 'react';

export interface NeoLandmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLandmarkSolid(props: NeoLandmarkSolidProps): React.ReactElement;
export default NeoLandmarkSolid;

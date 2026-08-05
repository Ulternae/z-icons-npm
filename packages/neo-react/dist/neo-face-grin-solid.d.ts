import React from 'react';

export interface NeoFaceGrinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFaceGrinSolid(props: NeoFaceGrinSolidProps): React.ReactElement;
export default NeoFaceGrinSolid;

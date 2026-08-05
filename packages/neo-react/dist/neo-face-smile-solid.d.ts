import React from 'react';

export interface NeoFaceSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFaceSmileSolid(props: NeoFaceSmileSolidProps): React.ReactElement;
export default NeoFaceSmileSolid;

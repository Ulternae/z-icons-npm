import React from 'react';

export interface NeoFaceSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceSmileSolid: React.FC<NeoFaceSmileSolidProps>;
export default NeoFaceSmileSolid;

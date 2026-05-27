import React from 'react';

export interface NeoFaceMehSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceMehSolid: React.FC<NeoFaceMehSolidProps>;
export default NeoFaceMehSolid;

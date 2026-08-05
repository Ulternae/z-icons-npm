import React from 'react';

export interface NeoFaceMehSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFaceMehSolid(props: NeoFaceMehSolidProps): React.ReactElement;
export default NeoFaceMehSolid;

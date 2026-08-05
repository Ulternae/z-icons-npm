import React from 'react';

export interface NeoListOlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoListOlSolid(props: NeoListOlSolidProps): React.ReactElement;
export default NeoListOlSolid;

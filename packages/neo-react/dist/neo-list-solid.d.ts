import React from 'react';

export interface NeoListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoListSolid(props: NeoListSolidProps): React.ReactElement;
export default NeoListSolid;

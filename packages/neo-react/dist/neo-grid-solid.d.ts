import React from 'react';

export interface NeoGridSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGridSolid(props: NeoGridSolidProps): React.ReactElement;
export default NeoGridSolid;

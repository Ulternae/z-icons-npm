import React from 'react';

export interface NeoCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCodeSolid(props: NeoCodeSolidProps): React.ReactElement;
export default NeoCodeSolid;

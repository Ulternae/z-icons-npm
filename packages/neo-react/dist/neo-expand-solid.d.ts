import React from 'react';

export interface NeoExpandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoExpandSolid(props: NeoExpandSolidProps): React.ReactElement;
export default NeoExpandSolid;

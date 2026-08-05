import React from 'react';

export interface MinaListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaListSolid(props: MinaListSolidProps): React.ReactElement;
export default MinaListSolid;

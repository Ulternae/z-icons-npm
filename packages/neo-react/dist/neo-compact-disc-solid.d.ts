import React from 'react';

export interface NeoCompactDiscSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCompactDiscSolid(props: NeoCompactDiscSolidProps): React.ReactElement;
export default NeoCompactDiscSolid;

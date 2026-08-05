import React from 'react';

export interface NeoEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEllipsisSolid(props: NeoEllipsisSolidProps): React.ReactElement;
export default NeoEllipsisSolid;

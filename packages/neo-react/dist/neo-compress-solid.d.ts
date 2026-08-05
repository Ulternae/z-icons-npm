import React from 'react';

export interface NeoCompressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCompressSolid(props: NeoCompressSolidProps): React.ReactElement;
export default NeoCompressSolid;

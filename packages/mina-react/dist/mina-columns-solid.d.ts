import React from 'react';

export interface MinaColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaColumnsSolid(props: MinaColumnsSolidProps): React.ReactElement;
export default MinaColumnsSolid;

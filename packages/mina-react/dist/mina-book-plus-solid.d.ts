import React from 'react';

export interface MinaBookPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookPlusSolid(props: MinaBookPlusSolidProps): React.ReactElement;
export default MinaBookPlusSolid;

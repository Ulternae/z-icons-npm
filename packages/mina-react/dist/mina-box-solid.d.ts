import React from 'react';

export interface MinaBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBoxSolid(props: MinaBoxSolidProps): React.ReactElement;
export default MinaBoxSolid;

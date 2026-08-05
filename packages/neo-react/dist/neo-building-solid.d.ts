import React from 'react';

export interface NeoBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBuildingSolid(props: NeoBuildingSolidProps): React.ReactElement;
export default NeoBuildingSolid;

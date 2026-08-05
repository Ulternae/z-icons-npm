import React from 'react';

export interface NeoBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBusSolid(props: NeoBusSolidProps): React.ReactElement;
export default NeoBusSolid;

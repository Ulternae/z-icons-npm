import React from 'react';

export interface LanPersonSleddingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSleddingSolid(props: LanPersonSleddingSolidProps): React.ReactElement;
export default LanPersonSleddingSolid;

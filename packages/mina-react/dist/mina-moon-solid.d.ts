import React from 'react';

export interface MinaMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoonSolid(props: MinaMoonSolidProps): React.ReactElement;
export default MinaMoonSolid;

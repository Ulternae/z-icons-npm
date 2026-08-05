import React from 'react';

export interface MinaMoveHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoveHorizontalSolid(props: MinaMoveHorizontalSolidProps): React.ReactElement;
export default MinaMoveHorizontalSolid;

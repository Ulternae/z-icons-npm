import React from 'react';

export interface MinaMoveVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoveVerticalSolid(props: MinaMoveVerticalSolidProps): React.ReactElement;
export default MinaMoveVerticalSolid;

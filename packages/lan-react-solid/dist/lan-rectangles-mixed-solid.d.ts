import React from 'react';

export interface LanRectanglesMixedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglesMixedSolid(props: LanRectanglesMixedSolidProps): React.ReactElement;
export default LanRectanglesMixedSolid;

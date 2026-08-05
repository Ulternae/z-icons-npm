import React from 'react';

export interface LanRectangleApiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleApiSolid(props: LanRectangleApiSolidProps): React.ReactElement;
export default LanRectangleApiSolid;

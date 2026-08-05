import React from 'react';

export interface LanRectangleAdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleAdSolid(props: LanRectangleAdSolidProps): React.ReactElement;
export default LanRectangleAdSolid;

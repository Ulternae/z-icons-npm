import React from 'react';

export interface LanRectangleNewSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleNewSolid(props: LanRectangleNewSolidProps): React.ReactElement;
export default LanRectangleNewSolid;

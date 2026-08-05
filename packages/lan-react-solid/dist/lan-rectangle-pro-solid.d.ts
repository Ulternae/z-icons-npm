import React from 'react';

export interface LanRectangleProSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleProSolid(props: LanRectangleProSolidProps): React.ReactElement;
export default LanRectangleProSolid;

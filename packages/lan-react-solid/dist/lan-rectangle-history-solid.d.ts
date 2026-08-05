import React from 'react';

export interface LanRectangleHistorySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHistorySolid(props: LanRectangleHistorySolidProps): React.ReactElement;
export default LanRectangleHistorySolid;

import React from 'react';

export interface LanRectangleMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleMinusSolid(props: LanRectangleMinusSolidProps): React.ReactElement;
export default LanRectangleMinusSolid;

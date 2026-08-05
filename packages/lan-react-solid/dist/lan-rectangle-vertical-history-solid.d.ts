import React from 'react';

export interface LanRectangleVerticalHistorySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleVerticalHistorySolid(props: LanRectangleVerticalHistorySolidProps): React.ReactElement;
export default LanRectangleVerticalHistorySolid;

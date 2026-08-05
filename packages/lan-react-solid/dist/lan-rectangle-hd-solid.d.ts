import React from 'react';

export interface LanRectangleHdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHdSolid(props: LanRectangleHdSolidProps): React.ReactElement;
export default LanRectangleHdSolid;

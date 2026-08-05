import React from 'react';

export interface LanRectangleHdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHdThin(props: LanRectangleHdThinProps): React.ReactElement;
export default LanRectangleHdThin;

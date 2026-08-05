import React from 'react';

export interface LanRectangleHdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHd(props: LanRectangleHdProps): React.ReactElement;
export default LanRectangleHd;

import React from 'react';

export interface LanRectangleNewProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleNew(props: LanRectangleNewProps): React.ReactElement;
export default LanRectangleNew;

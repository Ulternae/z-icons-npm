import React from 'react';

export interface LanGripDotsVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripDotsVerticalSolid(props: LanGripDotsVerticalSolidProps): React.ReactElement;
export default LanGripDotsVerticalSolid;

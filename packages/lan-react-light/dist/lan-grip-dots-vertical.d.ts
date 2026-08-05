import React from 'react';

export interface LanGripDotsVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripDotsVertical(props: LanGripDotsVerticalProps): React.ReactElement;
export default LanGripDotsVertical;

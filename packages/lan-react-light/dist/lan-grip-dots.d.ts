import React from 'react';

export interface LanGripDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripDots(props: LanGripDotsProps): React.ReactElement;
export default LanGripDots;

import React from 'react';

export interface LanHandDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandDots(props: LanHandDotsProps): React.ReactElement;
export default LanHandDots;

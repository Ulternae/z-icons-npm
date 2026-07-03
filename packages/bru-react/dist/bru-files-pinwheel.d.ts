import React from 'react';

export interface BruFilesPinwheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFilesPinwheel(props: BruFilesPinwheelProps): React.ReactElement;
export default BruFilesPinwheel;

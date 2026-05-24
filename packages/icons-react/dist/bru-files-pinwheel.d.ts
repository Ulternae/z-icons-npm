import React from 'react';

export interface BruFilesPinwheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFilesPinwheel: React.FC<BruFilesPinwheelProps>;
export default BruFilesPinwheel;

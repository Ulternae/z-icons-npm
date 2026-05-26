import React from 'react';

export interface LanHandPointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointer: React.FC<LanHandPointerProps>;
export default LanHandPointer;

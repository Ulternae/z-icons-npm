import React from 'react';

export interface LanGlobePointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobePointer: React.FC<LanGlobePointerProps>;
export default LanGlobePointer;

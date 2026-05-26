import React from 'react';

export interface LanFaceConfusedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceConfused: React.FC<LanFaceConfusedProps>;
export default LanFaceConfused;

import React from 'react';

export interface LanFaceMonocleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMonocle: React.FC<LanFaceMonocleProps>;
export default LanFaceMonocle;

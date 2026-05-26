import React from 'react';

export interface LanFaceAngryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceAngry: React.FC<LanFaceAngryProps>;
export default LanFaceAngry;

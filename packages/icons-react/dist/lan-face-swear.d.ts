import React from 'react';

export interface LanFaceSwearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSwear: React.FC<LanFaceSwearProps>;
export default LanFaceSwear;

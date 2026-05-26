import React from 'react';

export interface LanFaceHushedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHushed: React.FC<LanFaceHushedProps>;
export default LanFaceHushed;

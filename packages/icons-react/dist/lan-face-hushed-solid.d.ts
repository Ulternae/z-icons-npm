import React from 'react';

export interface LanFaceHushedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHushedSolid: React.FC<LanFaceHushedSolidProps>;
export default LanFaceHushedSolid;

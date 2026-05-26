import React from 'react';

export interface LanFaceHushedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHushedRegular: React.FC<LanFaceHushedRegularProps>;
export default LanFaceHushedRegular;

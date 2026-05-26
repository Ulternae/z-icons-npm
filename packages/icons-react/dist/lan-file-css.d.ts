import React from 'react';

export interface LanFileCssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCss: React.FC<LanFileCssProps>;
export default LanFileCss;

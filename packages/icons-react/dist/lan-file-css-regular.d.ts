import React from 'react';

export interface LanFileCssRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCssRegular: React.FC<LanFileCssRegularProps>;
export default LanFileCssRegular;

import React from 'react';

export interface LanFileDashedLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileDashedLineRegular: React.FC<LanFileDashedLineRegularProps>;
export default LanFileDashedLineRegular;

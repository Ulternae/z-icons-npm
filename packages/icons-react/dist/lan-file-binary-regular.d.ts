import React from 'react';

export interface LanFileBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileBinaryRegular: React.FC<LanFileBinaryRegularProps>;
export default LanFileBinaryRegular;

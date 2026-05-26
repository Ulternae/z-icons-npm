import React from 'react';

export interface LanFilePngRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePngRegular: React.FC<LanFilePngRegularProps>;
export default LanFilePngRegular;

import React from 'react';

export interface LanFileBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileBinary: React.FC<LanFileBinaryProps>;
export default LanFileBinary;

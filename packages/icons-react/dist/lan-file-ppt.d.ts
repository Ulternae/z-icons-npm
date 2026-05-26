import React from 'react';

export interface LanFilePptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePpt: React.FC<LanFilePptProps>;
export default LanFilePpt;

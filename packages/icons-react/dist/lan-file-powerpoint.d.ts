import React from 'react';

export interface LanFilePowerpointProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePowerpoint: React.FC<LanFilePowerpointProps>;
export default LanFilePowerpoint;

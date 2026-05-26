import React from 'react';

export interface LanFilePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePlus: React.FC<LanFilePlusProps>;
export default LanFilePlus;

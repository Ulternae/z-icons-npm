import React from 'react';

export interface LanFileCsvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCsv: React.FC<LanFileCsvProps>;
export default LanFileCsv;

import React from 'react';

export interface LanFileExcelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileExcelSolid: React.FC<LanFileExcelSolidProps>;
export default LanFileExcelSolid;

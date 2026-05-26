import React from 'react';

export interface LanFileExcelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileExcel: React.FC<LanFileExcelProps>;
export default LanFileExcel;

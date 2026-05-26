import React from 'react';

export interface LanFileExcelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileExcelThin: React.FC<LanFileExcelThinProps>;
export default LanFileExcelThin;

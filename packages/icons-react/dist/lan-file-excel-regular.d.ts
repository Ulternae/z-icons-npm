import React from 'react';

export interface LanFileExcelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileExcelRegular: React.FC<LanFileExcelRegularProps>;
export default LanFileExcelRegular;

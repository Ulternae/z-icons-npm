import React from 'react';

export interface LanFileSpreadsheetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSpreadsheet: React.FC<LanFileSpreadsheetProps>;
export default LanFileSpreadsheet;

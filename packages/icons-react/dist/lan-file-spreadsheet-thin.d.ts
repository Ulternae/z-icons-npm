import React from 'react';

export interface LanFileSpreadsheetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSpreadsheetThin: React.FC<LanFileSpreadsheetThinProps>;
export default LanFileSpreadsheetThin;

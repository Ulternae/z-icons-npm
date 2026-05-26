import React from 'react';

export interface LanFileSpreadsheetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSpreadsheetSolid: React.FC<LanFileSpreadsheetSolidProps>;
export default LanFileSpreadsheetSolid;

import React from 'react';

export interface LanFileSpreadsheetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSpreadsheet(props: LanFileSpreadsheetProps): React.ReactElement;
export default LanFileSpreadsheet;

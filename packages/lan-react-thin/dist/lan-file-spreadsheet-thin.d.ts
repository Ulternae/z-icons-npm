import React from 'react';

export interface LanFileSpreadsheetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSpreadsheetThin(props: LanFileSpreadsheetThinProps): React.ReactElement;
export default LanFileSpreadsheetThin;

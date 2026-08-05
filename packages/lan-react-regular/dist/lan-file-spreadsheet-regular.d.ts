import React from 'react';

export interface LanFileSpreadsheetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSpreadsheetRegular(props: LanFileSpreadsheetRegularProps): React.ReactElement;
export default LanFileSpreadsheetRegular;

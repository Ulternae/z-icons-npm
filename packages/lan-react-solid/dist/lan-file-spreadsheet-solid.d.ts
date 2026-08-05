import React from 'react';

export interface LanFileSpreadsheetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSpreadsheetSolid(props: LanFileSpreadsheetSolidProps): React.ReactElement;
export default LanFileSpreadsheetSolid;

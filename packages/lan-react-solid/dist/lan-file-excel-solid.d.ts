import React from 'react';

export interface LanFileExcelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileExcelSolid(props: LanFileExcelSolidProps): React.ReactElement;
export default LanFileExcelSolid;

import React from 'react';

export interface LanFileExcelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileExcel(props: LanFileExcelProps): React.ReactElement;
export default LanFileExcel;

import React from 'react';

export interface LanFileExcelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileExcelThin(props: LanFileExcelThinProps): React.ReactElement;
export default LanFileExcelThin;

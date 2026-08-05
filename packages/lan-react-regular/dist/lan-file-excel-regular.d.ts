import React from 'react';

export interface LanFileExcelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileExcelRegular(props: LanFileExcelRegularProps): React.ReactElement;
export default LanFileExcelRegular;

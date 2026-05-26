import React from 'react';

export interface LanTablePicnicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablePicnicRegular: React.FC<LanTablePicnicRegularProps>;
export default LanTablePicnicRegular;

import React from 'react';

export interface LanTablePicnicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablePicnicRegular(props: LanTablePicnicRegularProps): React.ReactElement;
export default LanTablePicnicRegular;

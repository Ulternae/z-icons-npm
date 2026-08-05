import React from 'react';

export interface LanTablePicnicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablePicnicThin(props: LanTablePicnicThinProps): React.ReactElement;
export default LanTablePicnicThin;

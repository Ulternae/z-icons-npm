import React from 'react';

export interface LanSplitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSplitRegular(props: LanSplitRegularProps): React.ReactElement;
export default LanSplitRegular;

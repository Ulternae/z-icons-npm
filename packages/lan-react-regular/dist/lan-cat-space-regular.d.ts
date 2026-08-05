import React from 'react';

export interface LanCatSpaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCatSpaceRegular(props: LanCatSpaceRegularProps): React.ReactElement;
export default LanCatSpaceRegular;

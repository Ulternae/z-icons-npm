import React from 'react';

export interface LanCatSpaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCatSpace(props: LanCatSpaceProps): React.ReactElement;
export default LanCatSpace;

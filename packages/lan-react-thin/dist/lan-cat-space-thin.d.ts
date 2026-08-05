import React from 'react';

export interface LanCatSpaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCatSpaceThin(props: LanCatSpaceThinProps): React.ReactElement;
export default LanCatSpaceThin;

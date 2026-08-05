import React from 'react';

export interface LanPeaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeaceThin(props: LanPeaceThinProps): React.ReactElement;
export default LanPeaceThin;

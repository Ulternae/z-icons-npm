import React from 'react';

export interface LanPlusLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusLargeThin(props: LanPlusLargeThinProps): React.ReactElement;
export default LanPlusLargeThin;

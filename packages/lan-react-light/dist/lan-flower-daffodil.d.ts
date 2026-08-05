import React from 'react';

export interface LanFlowerDaffodilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlowerDaffodil(props: LanFlowerDaffodilProps): React.ReactElement;
export default LanFlowerDaffodil;

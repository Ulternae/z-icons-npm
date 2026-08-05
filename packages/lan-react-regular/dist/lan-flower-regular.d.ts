import React from 'react';

export interface LanFlowerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlowerRegular(props: LanFlowerRegularProps): React.ReactElement;
export default LanFlowerRegular;

import React from 'react';

export interface LanSwordRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordRegular(props: LanSwordRegularProps): React.ReactElement;
export default LanSwordRegular;

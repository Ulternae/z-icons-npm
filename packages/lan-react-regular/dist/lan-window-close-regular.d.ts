import React from 'react';

export interface LanWindowCloseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowCloseRegular(props: LanWindowCloseRegularProps): React.ReactElement;
export default LanWindowCloseRegular;

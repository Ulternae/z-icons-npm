import React from 'react';

export interface LanCometRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCometRegular(props: LanCometRegularProps): React.ReactElement;
export default LanCometRegular;

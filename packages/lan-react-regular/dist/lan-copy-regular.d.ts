import React from 'react';

export interface LanCopyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCopyRegular(props: LanCopyRegularProps): React.ReactElement;
export default LanCopyRegular;

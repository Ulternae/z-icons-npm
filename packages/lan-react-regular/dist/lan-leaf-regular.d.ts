import React from 'react';

export interface LanLeafRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafRegular(props: LanLeafRegularProps): React.ReactElement;
export default LanLeafRegular;

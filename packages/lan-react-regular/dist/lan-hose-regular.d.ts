import React from 'react';

export interface LanHoseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoseRegular(props: LanHoseRegularProps): React.ReactElement;
export default LanHoseRegular;

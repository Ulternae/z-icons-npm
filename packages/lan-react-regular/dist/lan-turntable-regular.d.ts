import React from 'react';

export interface LanTurntableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurntableRegular(props: LanTurntableRegularProps): React.ReactElement;
export default LanTurntableRegular;

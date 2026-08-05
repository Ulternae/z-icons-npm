import React from 'react';

export interface LanIRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIRegular(props: LanIRegularProps): React.ReactElement;
export default LanIRegular;

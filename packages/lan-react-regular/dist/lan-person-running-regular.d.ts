import React from 'react';

export interface LanPersonRunningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRunningRegular(props: LanPersonRunningRegularProps): React.ReactElement;
export default LanPersonRunningRegular;

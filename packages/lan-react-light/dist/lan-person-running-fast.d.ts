import React from 'react';

export interface LanPersonRunningFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRunningFast(props: LanPersonRunningFastProps): React.ReactElement;
export default LanPersonRunningFast;

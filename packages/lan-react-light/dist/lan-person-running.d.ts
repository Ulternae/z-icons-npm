import React from 'react';

export interface LanPersonRunningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRunning(props: LanPersonRunningProps): React.ReactElement;
export default LanPersonRunning;

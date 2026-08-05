import React from 'react';

export interface LanPersonDressBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDressBurst(props: LanPersonDressBurstProps): React.ReactElement;
export default LanPersonDressBurst;

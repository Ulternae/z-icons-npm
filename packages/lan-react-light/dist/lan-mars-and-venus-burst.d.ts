import React from 'react';

export interface LanMarsAndVenusBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsAndVenusBurst(props: LanMarsAndVenusBurstProps): React.ReactElement;
export default LanMarsAndVenusBurst;

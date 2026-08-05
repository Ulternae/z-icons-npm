import React from 'react';

export interface LanStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStop(props: LanStopProps): React.ReactElement;
export default LanStop;

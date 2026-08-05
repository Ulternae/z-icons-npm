import React from 'react';

export interface LanCarOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarOn(props: LanCarOnProps): React.ReactElement;
export default LanCarOn;

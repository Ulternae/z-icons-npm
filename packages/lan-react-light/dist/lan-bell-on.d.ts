import React from 'react';

export interface LanBellOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellOn(props: LanBellOnProps): React.ReactElement;
export default LanBellOn;

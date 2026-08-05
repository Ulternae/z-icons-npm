import React from 'react';

export interface LanBlindsOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsOpen(props: LanBlindsOpenProps): React.ReactElement;
export default LanBlindsOpen;

import React from 'react';

export interface LanBlindsRaisedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsRaised(props: LanBlindsRaisedProps): React.ReactElement;
export default LanBlindsRaised;

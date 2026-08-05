import React from 'react';

export interface LanBlindsRaisedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsRaisedThin(props: LanBlindsRaisedThinProps): React.ReactElement;
export default LanBlindsRaisedThin;

import React from 'react';

export interface LanBlindsRaisedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsRaisedSolid(props: LanBlindsRaisedSolidProps): React.ReactElement;
export default LanBlindsRaisedSolid;

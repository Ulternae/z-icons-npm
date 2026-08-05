import React from 'react';

export interface LanDownLeftAndUpRightToCenterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownLeftAndUpRightToCenter(props: LanDownLeftAndUpRightToCenterProps): React.ReactElement;
export default LanDownLeftAndUpRightToCenter;

import React from 'react';

export interface LanSendBackwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSendBackward(props: LanSendBackwardProps): React.ReactElement;
export default LanSendBackward;

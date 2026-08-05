import React from 'react';

export interface LanSendBackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSendBackThin(props: LanSendBackThinProps): React.ReactElement;
export default LanSendBackThin;

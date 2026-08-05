import React from 'react';

export interface LanHandHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHeartThin(props: LanHandHeartThinProps): React.ReactElement;
export default LanHandHeartThin;

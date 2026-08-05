import React from 'react';

export interface LanBlackboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlackboardThin(props: LanBlackboardThinProps): React.ReactElement;
export default LanBlackboardThin;

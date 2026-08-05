import React from 'react';

export interface LanScrollTorahThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollTorahThin(props: LanScrollTorahThinProps): React.ReactElement;
export default LanScrollTorahThin;

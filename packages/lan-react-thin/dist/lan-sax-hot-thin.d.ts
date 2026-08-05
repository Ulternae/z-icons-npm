import React from 'react';

export interface LanSaxHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaxHotThin(props: LanSaxHotThinProps): React.ReactElement;
export default LanSaxHotThin;

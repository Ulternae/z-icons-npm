import React from 'react';

export interface LanTrowelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrowelThin(props: LanTrowelThinProps): React.ReactElement;
export default LanTrowelThin;

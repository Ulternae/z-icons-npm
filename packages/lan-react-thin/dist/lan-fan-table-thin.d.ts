import React from 'react';

export interface LanFanTableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFanTableThin(props: LanFanTableThinProps): React.ReactElement;
export default LanFanTableThin;

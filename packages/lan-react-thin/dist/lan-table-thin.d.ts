import React from 'react';

export interface LanTableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableThin(props: LanTableThinProps): React.ReactElement;
export default LanTableThin;

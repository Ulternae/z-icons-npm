import React from 'react';

export interface LanWheatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheatThin(props: LanWheatThinProps): React.ReactElement;
export default LanWheatThin;

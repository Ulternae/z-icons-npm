import React from 'react';

export interface LanFerryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFerryThin(props: LanFerryThinProps): React.ReactElement;
export default LanFerryThin;

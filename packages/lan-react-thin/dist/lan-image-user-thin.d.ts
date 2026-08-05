import React from 'react';

export interface LanImageUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageUserThin(props: LanImageUserThinProps): React.ReactElement;
export default LanImageUserThin;

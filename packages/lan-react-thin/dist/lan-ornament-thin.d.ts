import React from 'react';

export interface LanOrnamentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOrnamentThin(props: LanOrnamentThinProps): React.ReactElement;
export default LanOrnamentThin;

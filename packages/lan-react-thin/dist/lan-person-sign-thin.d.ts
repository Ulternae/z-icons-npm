import React from 'react';

export interface LanPersonSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSignThin(props: LanPersonSignThinProps): React.ReactElement;
export default LanPersonSignThin;

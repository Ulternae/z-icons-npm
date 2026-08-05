import React from 'react';

export interface LanColonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanColonThin(props: LanColonThinProps): React.ReactElement;
export default LanColonThin;

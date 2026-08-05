import React from 'react';

export interface LanUfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUfoThin(props: LanUfoThinProps): React.ReactElement;
export default LanUfoThin;

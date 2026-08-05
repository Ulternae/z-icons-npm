import React from 'react';

export interface LanSpiderWebThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiderWebThin(props: LanSpiderWebThinProps): React.ReactElement;
export default LanSpiderWebThin;

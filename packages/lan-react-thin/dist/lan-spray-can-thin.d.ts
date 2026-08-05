import React from 'react';

export interface LanSprayCanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprayCanThin(props: LanSprayCanThinProps): React.ReactElement;
export default LanSprayCanThin;

import React from 'react';

export interface LanObjectUngroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectUngroupThin(props: LanObjectUngroupThinProps): React.ReactElement;
export default LanObjectUngroupThin;

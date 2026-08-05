import React from 'react';

export interface LanAlignCenterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignCenterThin(props: LanAlignCenterThinProps): React.ReactElement;
export default LanAlignCenterThin;

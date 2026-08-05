import React from 'react';

export interface LanAlignJustifyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignJustifyThin(props: LanAlignJustifyThinProps): React.ReactElement;
export default LanAlignJustifyThin;

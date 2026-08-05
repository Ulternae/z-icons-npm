import React from 'react';

export interface LanScalpelLineDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScalpelLineDashedThin(props: LanScalpelLineDashedThinProps): React.ReactElement;
export default LanScalpelLineDashedThin;

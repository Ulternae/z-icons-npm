import React from 'react';

export interface LanScalpelLineDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScalpelLineDashed(props: LanScalpelLineDashedProps): React.ReactElement;
export default LanScalpelLineDashed;

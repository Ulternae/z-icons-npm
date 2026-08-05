import React from 'react';

export interface LanTextWidthThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextWidthThin(props: LanTextWidthThinProps): React.ReactElement;
export default LanTextWidthThin;

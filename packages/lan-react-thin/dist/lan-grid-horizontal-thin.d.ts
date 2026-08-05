import React from 'react';

export interface LanGridHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridHorizontalThin(props: LanGridHorizontalThinProps): React.ReactElement;
export default LanGridHorizontalThin;

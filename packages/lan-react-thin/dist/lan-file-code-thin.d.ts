import React from 'react';

export interface LanFileCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCodeThin(props: LanFileCodeThinProps): React.ReactElement;
export default LanFileCodeThin;

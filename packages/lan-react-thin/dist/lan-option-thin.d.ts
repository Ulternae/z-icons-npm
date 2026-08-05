import React from 'react';

export interface LanOptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOptionThin(props: LanOptionThinProps): React.ReactElement;
export default LanOptionThin;

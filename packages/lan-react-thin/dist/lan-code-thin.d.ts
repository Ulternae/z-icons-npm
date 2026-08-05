import React from 'react';

export interface LanCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeThin(props: LanCodeThinProps): React.ReactElement;
export default LanCodeThin;

import React from 'react';

export interface LanInputPasswordThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputPasswordThin(props: LanInputPasswordThinProps): React.ReactElement;
export default LanInputPasswordThin;

import React from 'react';

export interface LanInputPasswordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputPassword(props: LanInputPasswordProps): React.ReactElement;
export default LanInputPassword;

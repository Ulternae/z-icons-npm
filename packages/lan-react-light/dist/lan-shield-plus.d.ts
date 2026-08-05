import React from 'react';

export interface LanShieldPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldPlus(props: LanShieldPlusProps): React.ReactElement;
export default LanShieldPlus;

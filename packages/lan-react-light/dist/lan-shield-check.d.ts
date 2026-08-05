import React from 'react';

export interface LanShieldCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCheck(props: LanShieldCheckProps): React.ReactElement;
export default LanShieldCheck;

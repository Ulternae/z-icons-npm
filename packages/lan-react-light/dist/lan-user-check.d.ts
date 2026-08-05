import React from 'react';

export interface LanUserCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCheck(props: LanUserCheckProps): React.ReactElement;
export default LanUserCheck;

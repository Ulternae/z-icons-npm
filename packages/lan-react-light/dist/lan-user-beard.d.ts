import React from 'react';

export interface LanUserBeardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserBeard(props: LanUserBeardProps): React.ReactElement;
export default LanUserBeard;

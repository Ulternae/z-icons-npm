import React from 'react';

export interface LanUserKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserKeySolid(props: LanUserKeySolidProps): React.ReactElement;
export default LanUserKeySolid;

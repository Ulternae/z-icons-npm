import React from 'react';

export interface LanUserCowboySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCowboySolid(props: LanUserCowboySolidProps): React.ReactElement;
export default LanUserCowboySolid;

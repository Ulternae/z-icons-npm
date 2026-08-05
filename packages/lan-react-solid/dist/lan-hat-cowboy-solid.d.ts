import React from 'react';

export interface LanHatCowboySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatCowboySolid(props: LanHatCowboySolidProps): React.ReactElement;
export default LanHatCowboySolid;

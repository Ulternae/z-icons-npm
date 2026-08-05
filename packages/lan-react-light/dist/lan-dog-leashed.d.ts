import React from 'react';

export interface LanDogLeashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDogLeashed(props: LanDogLeashedProps): React.ReactElement;
export default LanDogLeashed;

import React from 'react';

export interface LanCarPeopleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarPeopleThin(props: LanCarPeopleThinProps): React.ReactElement;
export default LanCarPeopleThin;

import React from 'react';

export interface LanPeopleLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleLine(props: LanPeopleLineProps): React.ReactElement;
export default LanPeopleLine;

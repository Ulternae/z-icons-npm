import React from 'react';

export interface LanPeopleDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleDress(props: LanPeopleDressProps): React.ReactElement;
export default LanPeopleDress;

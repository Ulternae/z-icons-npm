import React from 'react';

export interface LanPeopleDressSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleDressSimple(props: LanPeopleDressSimpleProps): React.ReactElement;
export default LanPeopleDressSimple;

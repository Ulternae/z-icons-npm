import React from 'react';

export interface LanPeopleDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleDressRegular(props: LanPeopleDressRegularProps): React.ReactElement;
export default LanPeopleDressRegular;

import React from 'react';

export interface LanMugTeaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugTeaRegular(props: LanMugTeaRegularProps): React.ReactElement;
export default LanMugTeaRegular;

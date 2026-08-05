import React from 'react';

export interface LanHouseTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTreeThin(props: LanHouseTreeThinProps): React.ReactElement;
export default LanHouseTreeThin;

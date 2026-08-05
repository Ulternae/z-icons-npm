import React from 'react';

export interface LanMakiRollRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMakiRollRegular(props: LanMakiRollRegularProps): React.ReactElement;
export default LanMakiRollRegular;

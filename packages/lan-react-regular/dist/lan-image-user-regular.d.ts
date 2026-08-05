import React from 'react';

export interface LanImageUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageUserRegular(props: LanImageUserRegularProps): React.ReactElement;
export default LanImageUserRegular;

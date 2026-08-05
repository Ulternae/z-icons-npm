import React from 'react';

export interface LanOrnamentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOrnamentRegular(props: LanOrnamentRegularProps): React.ReactElement;
export default LanOrnamentRegular;

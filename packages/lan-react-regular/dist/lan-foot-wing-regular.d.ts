import React from 'react';

export interface LanFootWingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootWingRegular(props: LanFootWingRegularProps): React.ReactElement;
export default LanFootWingRegular;

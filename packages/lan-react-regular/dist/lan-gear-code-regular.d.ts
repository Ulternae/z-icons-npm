import React from 'react';

export interface LanGearCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearCodeRegular(props: LanGearCodeRegularProps): React.ReactElement;
export default LanGearCodeRegular;

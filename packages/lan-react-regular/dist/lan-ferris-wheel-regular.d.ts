import React from 'react';

export interface LanFerrisWheelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFerrisWheelRegular(props: LanFerrisWheelRegularProps): React.ReactElement;
export default LanFerrisWheelRegular;

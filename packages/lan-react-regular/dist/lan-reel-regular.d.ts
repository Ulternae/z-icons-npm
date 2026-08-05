import React from 'react';

export interface LanReelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReelRegular(props: LanReelRegularProps): React.ReactElement;
export default LanReelRegular;

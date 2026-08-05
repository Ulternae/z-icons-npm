import React from 'react';

export interface LanTrowelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrowelRegular(props: LanTrowelRegularProps): React.ReactElement;
export default LanTrowelRegular;

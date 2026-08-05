import React from 'react';

export interface LanBoxesPackingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxesPackingRegular(props: LanBoxesPackingRegularProps): React.ReactElement;
export default LanBoxesPackingRegular;

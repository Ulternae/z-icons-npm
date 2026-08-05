import React from 'react';

export interface LanSwatchbookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwatchbookRegular(props: LanSwatchbookRegularProps): React.ReactElement;
export default LanSwatchbookRegular;

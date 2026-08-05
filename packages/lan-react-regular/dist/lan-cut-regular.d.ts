import React from 'react';

export interface LanCutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCutRegular(props: LanCutRegularProps): React.ReactElement;
export default LanCutRegular;

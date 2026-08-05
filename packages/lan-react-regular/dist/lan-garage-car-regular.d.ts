import React from 'react';

export interface LanGarageCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageCarRegular(props: LanGarageCarRegularProps): React.ReactElement;
export default LanGarageCarRegular;

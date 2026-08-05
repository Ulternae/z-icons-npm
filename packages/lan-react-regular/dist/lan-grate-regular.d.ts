import React from 'react';

export interface LanGrateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrateRegular(props: LanGrateRegularProps): React.ReactElement;
export default LanGrateRegular;

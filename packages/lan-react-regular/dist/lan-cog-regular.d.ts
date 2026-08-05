import React from 'react';

export interface LanCogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCogRegular(props: LanCogRegularProps): React.ReactElement;
export default LanCogRegular;

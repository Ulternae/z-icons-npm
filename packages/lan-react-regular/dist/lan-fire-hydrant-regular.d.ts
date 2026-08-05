import React from 'react';

export interface LanFireHydrantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireHydrantRegular(props: LanFireHydrantRegularProps): React.ReactElement;
export default LanFireHydrantRegular;

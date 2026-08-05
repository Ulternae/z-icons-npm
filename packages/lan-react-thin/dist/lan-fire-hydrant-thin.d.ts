import React from 'react';

export interface LanFireHydrantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireHydrantThin(props: LanFireHydrantThinProps): React.ReactElement;
export default LanFireHydrantThin;

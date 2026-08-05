import React from 'react';

export interface LanFireHydrantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireHydrant(props: LanFireHydrantProps): React.ReactElement;
export default LanFireHydrant;

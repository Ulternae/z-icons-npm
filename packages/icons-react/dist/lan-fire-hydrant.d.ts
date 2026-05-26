import React from 'react';

export interface LanFireHydrantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireHydrant: React.FC<LanFireHydrantProps>;
export default LanFireHydrant;

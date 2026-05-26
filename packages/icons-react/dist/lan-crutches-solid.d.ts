import React from 'react';

export interface LanCrutchesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrutchesSolid: React.FC<LanCrutchesSolidProps>;
export default LanCrutchesSolid;

import React from 'react';

export interface LanCrutchesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrutchesSolid(props: LanCrutchesSolidProps): React.ReactElement;
export default LanCrutchesSolid;

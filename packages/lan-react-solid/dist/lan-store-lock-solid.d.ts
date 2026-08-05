import React from 'react';

export interface LanStoreLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreLockSolid(props: LanStoreLockSolidProps): React.ReactElement;
export default LanStoreLockSolid;

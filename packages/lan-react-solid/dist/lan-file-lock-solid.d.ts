import React from 'react';

export interface LanFileLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileLockSolid(props: LanFileLockSolidProps): React.ReactElement;
export default LanFileLockSolid;

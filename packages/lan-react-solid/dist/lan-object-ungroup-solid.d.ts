import React from 'react';

export interface LanObjectUngroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectUngroupSolid(props: LanObjectUngroupSolidProps): React.ReactElement;
export default LanObjectUngroupSolid;

import React from 'react';

export interface LanObjectUngroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectUngroup(props: LanObjectUngroupProps): React.ReactElement;
export default LanObjectUngroup;

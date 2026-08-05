import React from 'react';

export interface LanFloppyDiskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDiskSolid(props: LanFloppyDiskSolidProps): React.ReactElement;
export default LanFloppyDiskSolid;

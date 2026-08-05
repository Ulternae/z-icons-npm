import React from 'react';

export interface LanFloppyDisksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDisksSolid(props: LanFloppyDisksSolidProps): React.ReactElement;
export default LanFloppyDisksSolid;

import React from 'react';

export interface LanFloppyDiskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDisk(props: LanFloppyDiskProps): React.ReactElement;
export default LanFloppyDisk;

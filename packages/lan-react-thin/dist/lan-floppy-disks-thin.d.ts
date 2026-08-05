import React from 'react';

export interface LanFloppyDisksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDisksThin(props: LanFloppyDisksThinProps): React.ReactElement;
export default LanFloppyDisksThin;

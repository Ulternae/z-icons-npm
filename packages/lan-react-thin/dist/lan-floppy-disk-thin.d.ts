import React from 'react';

export interface LanFloppyDiskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDiskThin(props: LanFloppyDiskThinProps): React.ReactElement;
export default LanFloppyDiskThin;

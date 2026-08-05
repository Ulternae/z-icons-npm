import React from 'react';

export interface LanFloppyDiskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDiskRegular(props: LanFloppyDiskRegularProps): React.ReactElement;
export default LanFloppyDiskRegular;

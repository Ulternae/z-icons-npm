import React from 'react';

export interface LanFloppyDiskPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDiskPen(props: LanFloppyDiskPenProps): React.ReactElement;
export default LanFloppyDiskPen;

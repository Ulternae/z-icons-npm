import React from 'react';

export interface LanFloppyDisksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDisks(props: LanFloppyDisksProps): React.ReactElement;
export default LanFloppyDisks;

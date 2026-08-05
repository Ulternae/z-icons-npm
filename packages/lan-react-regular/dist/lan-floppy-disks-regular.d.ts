import React from 'react';

export interface LanFloppyDisksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFloppyDisksRegular(props: LanFloppyDisksRegularProps): React.ReactElement;
export default LanFloppyDisksRegular;

import React from 'react';

export interface LanTablePicnicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablePicnic(props: LanTablePicnicProps): React.ReactElement;
export default LanTablePicnic;

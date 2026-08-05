import React from 'react';

export interface LanLabelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLabelSolid(props: LanLabelSolidProps): React.ReactElement;
export default LanLabelSolid;

import React from 'react';

export interface LanLabelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLabel(props: LanLabelProps): React.ReactElement;
export default LanLabel;

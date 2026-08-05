import React from 'react';

export interface LanPenFieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenField(props: LanPenFieldProps): React.ReactElement;
export default LanPenField;

import React from 'react';

export interface LanLuchadorMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLuchadorMaskRegular(props: LanLuchadorMaskRegularProps): React.ReactElement;
export default LanLuchadorMaskRegular;

import React from 'react';

export interface LanLabelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLabelRegular(props: LanLabelRegularProps): React.ReactElement;
export default LanLabelRegular;

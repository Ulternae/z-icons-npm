import React from 'react';

export interface LanLeoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeoRegular(props: LanLeoRegularProps): React.ReactElement;
export default LanLeoRegular;

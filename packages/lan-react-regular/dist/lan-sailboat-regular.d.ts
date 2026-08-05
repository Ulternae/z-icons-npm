import React from 'react';

export interface LanSailboatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSailboatRegular(props: LanSailboatRegularProps): React.ReactElement;
export default LanSailboatRegular;

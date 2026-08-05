import React from 'react';

export interface LanSinkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSinkRegular(props: LanSinkRegularProps): React.ReactElement;
export default LanSinkRegular;

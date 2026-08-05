import React from 'react';

export interface LanHippoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHippoRegular(props: LanHippoRegularProps): React.ReactElement;
export default LanHippoRegular;

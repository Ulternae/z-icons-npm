import React from 'react';

export interface LanSparkleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSparkleRegular(props: LanSparkleRegularProps): React.ReactElement;
export default LanSparkleRegular;

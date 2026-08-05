import React from 'react';

export interface LanSparkleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSparkle(props: LanSparkleProps): React.ReactElement;
export default LanSparkle;

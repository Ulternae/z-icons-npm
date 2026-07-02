import React from 'react';

export interface CoreSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSparklesSolid(props: CoreSparklesSolidProps): React.ReactElement;
export default CoreSparklesSolid;

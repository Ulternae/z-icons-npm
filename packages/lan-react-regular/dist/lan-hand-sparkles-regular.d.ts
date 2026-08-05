import React from 'react';

export interface LanHandSparklesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandSparklesRegular(props: LanHandSparklesRegularProps): React.ReactElement;
export default LanHandSparklesRegular;

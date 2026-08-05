import React from 'react';

export interface LanSparklesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSparklesRegular(props: LanSparklesRegularProps): React.ReactElement;
export default LanSparklesRegular;

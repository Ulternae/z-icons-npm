import React from 'react';

export interface LanWandSparklesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandSparklesRegular(props: LanWandSparklesRegularProps): React.ReactElement;
export default LanWandSparklesRegular;

import React from 'react';

export interface LanLassoSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLassoSparkles(props: LanLassoSparklesProps): React.ReactElement;
export default LanLassoSparkles;

import React from 'react';

export interface LanSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSparkles(props: LanSparklesProps): React.ReactElement;
export default LanSparkles;

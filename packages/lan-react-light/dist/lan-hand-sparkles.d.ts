import React from 'react';

export interface LanHandSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandSparkles(props: LanHandSparklesProps): React.ReactElement;
export default LanHandSparkles;

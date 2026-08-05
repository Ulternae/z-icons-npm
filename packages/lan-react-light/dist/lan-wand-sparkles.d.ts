import React from 'react';

export interface LanWandSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandSparkles(props: LanWandSparklesProps): React.ReactElement;
export default LanWandSparkles;

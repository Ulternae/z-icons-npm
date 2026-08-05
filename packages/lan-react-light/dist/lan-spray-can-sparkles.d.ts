import React from 'react';

export interface LanSprayCanSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprayCanSparkles(props: LanSprayCanSparklesProps): React.ReactElement;
export default LanSprayCanSparkles;

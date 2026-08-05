import React from 'react';

export interface LanMagicWandSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagicWandSparkles(props: LanMagicWandSparklesProps): React.ReactElement;
export default LanMagicWandSparkles;

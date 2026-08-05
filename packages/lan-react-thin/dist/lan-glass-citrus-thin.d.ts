import React from 'react';

export interface LanGlassCitrusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassCitrusThin(props: LanGlassCitrusThinProps): React.ReactElement;
export default LanGlassCitrusThin;

import React from 'react';

export interface LanGlobeWwwThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeWwwThin(props: LanGlobeWwwThinProps): React.ReactElement;
export default LanGlobeWwwThin;

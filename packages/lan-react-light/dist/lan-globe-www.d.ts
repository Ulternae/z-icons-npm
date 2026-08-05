import React from 'react';

export interface LanGlobeWwwProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeWww(props: LanGlobeWwwProps): React.ReactElement;
export default LanGlobeWww;

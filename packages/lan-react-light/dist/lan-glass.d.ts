import React from 'react';

export interface LanGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlass(props: LanGlassProps): React.ReactElement;
export default LanGlass;

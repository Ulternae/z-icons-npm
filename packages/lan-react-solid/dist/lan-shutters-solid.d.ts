import React from 'react';

export interface LanShuttersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttersSolid(props: LanShuttersSolidProps): React.ReactElement;
export default LanShuttersSolid;

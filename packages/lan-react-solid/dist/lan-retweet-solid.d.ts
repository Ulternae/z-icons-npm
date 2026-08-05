import React from 'react';

export interface LanRetweetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRetweetSolid(props: LanRetweetSolidProps): React.ReactElement;
export default LanRetweetSolid;

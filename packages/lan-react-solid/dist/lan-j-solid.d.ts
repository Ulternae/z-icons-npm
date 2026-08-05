import React from 'react';

export interface LanJSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJSolid(props: LanJSolidProps): React.ReactElement;
export default LanJSolid;

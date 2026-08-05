import React from 'react';

export interface LanToothbrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToothbrushSolid(props: LanToothbrushSolidProps): React.ReactElement;
export default LanToothbrushSolid;
